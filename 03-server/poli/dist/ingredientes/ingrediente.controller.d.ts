import { HttpStatus } from '@nestjs/common';
import { IngredientesService } from './ingrediente.service';
import { Ingrediente } from './ingrediente.entity';
export declare class IngredientesController {
    private readonly ingredientesService;
    constructor(ingredientesService: IngredientesService);
    crear(data: Partial<Ingrediente>): Promise<{
        statusCode: HttpStatus;
        data: Ingrediente;
    }>;
    actualizar(id: number, data: Partial<Ingrediente>): Promise<{
        statusCode: HttpStatus;
        data: Ingrediente;
    }>;
    eliminar(id: number): Promise<{
        statusCode: HttpStatus;
    }>;
    obtenerUno(id: number): Promise<{
        statusCode: HttpStatus;
        data: Ingrediente;
    }>;
    obtenerMuchos(filtros: any): Promise<{
        statusCode: HttpStatus;
        data: Ingrediente[];
    }>;
}
