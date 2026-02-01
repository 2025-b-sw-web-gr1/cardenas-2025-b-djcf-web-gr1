import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Receta } from '../recetas/receta.entity';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cantidad: string;

  @ManyToOne(() => Receta, receta => receta.ingredientes)
  receta: Receta;
}