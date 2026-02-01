import { Repository } from 'typeorm';
import { Receta } from './receta.entity';
export declare class RecetasService {
    private readonly recetaRepository;
    constructor(recetaRepository: Repository<Receta>);
    crear(data: Partial<Receta>): Promise<Receta>;
    actualizar(id: number, data: Partial<Receta>): Promise<Receta | null>;
    eliminar(id: number): Promise<void>;
    obtenerUno(id: number): Promise<Receta | null>;
    obtenerMuchos(filtros?: any): Promise<Receta[]>;
}
