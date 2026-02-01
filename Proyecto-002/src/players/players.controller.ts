import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores' })
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  @ApiParam({ name: 'id', description: 'ID del jugador', type: 'number' })
  @ApiResponse({ status: 200, description: 'Jugador encontrado' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @ApiResponse({ status: 201, description: 'Jugador creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador', type: 'number' })
  @ApiResponse({ status: 200, description: 'Jugador actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador', type: 'number' })
  @ApiResponse({ status: 204, description: 'Jugador eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Jugador no encontrado' })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.playersService.delete(+id);
  }
}
