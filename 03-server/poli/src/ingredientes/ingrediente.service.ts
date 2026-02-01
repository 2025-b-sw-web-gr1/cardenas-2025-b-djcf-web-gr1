import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private readonly ingredienteRepository: Repository<Ingrediente>,
  ) {}

  // Crear un ingrediente
  async crear(data: Partial<Ingrediente>): Promise<Ingrediente> {
    const ingrediente = this.ingredienteRepository.create(data);
    return this.ingredienteRepository.save(ingrediente);
  }

  // Actualizar un ingrediente
  async actualizar(id: number, data: Partial<Ingrediente>): Promise<Ingrediente| null> {
    await this.ingredienteRepository.update(id, data);
    return this.ingredienteRepository.findOneBy({ id });
  }

  // Eliminar un ingrediente
  async eliminar(id: number): Promise<void> {
    await this.ingredienteRepository.delete(id);
  }

  // Obtener un ingrediente por ID
  async obtenerUno(id: number): Promise<Ingrediente| null> {
    return this.ingredienteRepository.findOne({
      where: { id },
      relations: ['receta'], // Incluye la receta relacionada
    });
  }

  // Obtener muchos ingredientes (con posibilidad de filtros)
  async obtenerMuchos(filtros?: any): Promise<Ingrediente[]> {
    const query = this.ingredienteRepository.createQueryBuilder('ingrediente')
      .leftJoinAndSelect('ingrediente.receta', 'receta');

    if (filtros?.nombre) {
      query.andWhere('ingrediente.nombre LIKE :nombre', { nombre: `%${filtros.nombre}%` });
    }
    if (filtros?.cantidad) {
      query.orWhere('ingrediente.cantidad LIKE :cantidad', { cantidad: `%${filtros.cantidad}%` });
    }

    return query.getMany();
  }
}
 