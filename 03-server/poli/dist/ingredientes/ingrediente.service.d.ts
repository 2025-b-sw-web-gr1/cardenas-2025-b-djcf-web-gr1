import { Repository } from 'typeorm';
import { Ingrediente } from './ingrediente.entity';
export declare class IngredientesService {
    private readonly ingredienteRepository;
    constructor(ingredienteRepository: Repository<Ingrediente>);
    crear(data: Partial<Ingrediente>): Promise<Ingrediente>;
    actualizar(id: number, data: Partial<Ingrediente>): Promise<Ingrediente | null>;
    eliminar(id: number): Promise<void>;
    obtenerUno(id: number): Promise<Ingrediente | null>;
    obtenerMuchos(filtros?: any): Promise<Ingrediente[]>;
}
