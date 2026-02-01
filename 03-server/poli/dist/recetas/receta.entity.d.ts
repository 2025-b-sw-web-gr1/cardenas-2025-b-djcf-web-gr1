import { Ingrediente } from '../ingredientes/ingrediente.entity';
export declare class Receta {
    id: number;
    nombre: string;
    descripcion: string;
    ingredientes: Ingrediente[];
}
