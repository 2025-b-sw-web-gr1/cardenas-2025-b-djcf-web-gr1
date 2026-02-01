import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RecetasService } from './receta.service';
import { Receta } from './receta.entity';

@Controller('recetas')
export class RecetasController {
  constructor(private readonly recetasService: RecetasService) {}

  // Crear una receta
  @Post()
  async crear(@Body() data: Partial<Receta>) {
    try {
      const receta = await this.recetasService.crear(data);
      return { statusCode: HttpStatus.CREATED, data: receta };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Actualizar una receta
  @Patch(':id')
  async actualizar(@Param('id') id: number, @Body() data: Partial<Receta>) {
    try {
      const receta = await this.recetasService.actualizar(id, data);
      if (!receta) {
        throw new HttpException('Receta no encontrada', HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, data: receta };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Eliminar una receta
  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    try {
      await this.recetasService.eliminar(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // Obtener una receta por ID
  @Get(':id')
  async obtenerUno(@Param('id') id: number) {
    const receta = await this.recetasService.obtenerUno(id);
    if (!receta) {
      throw new HttpException('Receta no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: receta };
  }

  // Obtener muchas recetas con filtros
  @Get()
  async obtenerMuchos(@Query() filtros: any) {
    const recetas = await this.recetasService.obtenerMuchos(filtros);
    return { statusCode: HttpStatus.OK, data: recetas };
  }
}
 