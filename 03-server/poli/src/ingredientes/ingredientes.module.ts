import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingrediente } from './ingrediente.entity';
import { IngredientesService } from './ingrediente.service';
import { IngredientesController } from './ingrediente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente])],
  providers: [IngredientesService],
  controllers: [IngredientesController],
  exports: [TypeOrmModule, IngredientesService],
})
export class IngredientesModule {}
 
 