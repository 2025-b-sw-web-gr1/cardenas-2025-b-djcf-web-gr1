import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingrediente } from '../ingredientes/ingrediente.entity';

@Entity()
export class Receta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToMany(() => Ingrediente, ingrediente => ingrediente.receta, { cascade: true })
  ingredientes: Ingrediente[];
}