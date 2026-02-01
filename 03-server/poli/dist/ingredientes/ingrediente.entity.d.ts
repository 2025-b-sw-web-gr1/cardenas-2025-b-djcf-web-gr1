import { Receta } from '../recetas/receta.entity';
export declare class Ingrediente {
    id: number;
    nombre: string;
    cantidad: string;
    receta: Receta;
}
