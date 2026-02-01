import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>,
  ) {}

  // Crear una receta
  async crear(data: Partial<Receta>): Promise<Receta> {
    const receta = this.recetaRepository.create(data);
    return this.recetaRepository.save(receta);
  }

  // Actualizar una receta
  async actualizar(id: number, data: Partial<Receta>): Promise<Receta | null> {
    await this.recetaRepository.update(id, data);
    return this.recetaRepository.findOneBy({ id });
  }

  // Eliminar una receta
  async eliminar(id: number): Promise<void> {
    await this.recetaRepository.delete(id);
  }

  // Obtener una receta por ID
  async obtenerUno(id: number): Promise<Receta | null> {
    return this.recetaRepository.findOne({
      where: { id },
      relations: ['ingredientes'], // Incluye ingredientes relacionados
    });
  }

  // Obtener muchas recetas (con posibilidad de filtros)
  async obtenerMuchos(filtros?: any): Promise<Receta[]> {
    const query = this.recetaRepository.createQueryBuilder('receta')
      .leftJoinAndSelect('receta.ingredientes', 'ingrediente');

    // Ejemplo de filtros dinámicos
    if (filtros?.nombre) {
      query.andWhere('receta.nombre LIKE :nombre', { nombre: `%${filtros.nombre}%` });
    }
    if (filtros?.descripcion) {
      query.orWhere('receta.descripcion LIKE :descripcion', { descripcion: `%${filtros.descripcion}%` });
    }

    return query.getMany();
  }
}