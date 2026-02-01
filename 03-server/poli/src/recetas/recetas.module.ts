import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './receta.entity';
import { RecetasService } from './receta.service';
import { RecetasController } from './receta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Receta])],
  providers: [RecetasService],
  controllers: [RecetasController],
  exports: [TypeOrmModule, RecetasService]
})
export class RecetasModule {}
 

 