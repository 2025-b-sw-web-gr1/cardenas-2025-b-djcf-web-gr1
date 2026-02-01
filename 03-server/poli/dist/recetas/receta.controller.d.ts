import { HttpStatus } from '@nestjs/common';
import { RecetasService } from './receta.service';
import { Receta } from './receta.entity';
export declare class RecetasController {
    private readonly recetasService;
    constructor(recetasService: RecetasService);
    crear(data: Partial<Receta>): Promise<{
        statusCode: HttpStatus;
        data: Receta;
    }>;
    actualizar(id: number, data: Partial<Receta>): Promise<{
        statusCode: HttpStatus;
        data: Receta;
    }>;
    eliminar(id: number): Promise<{
        statusCode: HttpStatus;
    }>;
    obtenerUno(id: number): Promise<{
        statusCode: HttpStatus;
        data: Receta;
    }>;
    obtenerMuchos(filtros: any): Promise<{
        statusCode: HttpStatus;
        data: Receta[];
    }>;
}
