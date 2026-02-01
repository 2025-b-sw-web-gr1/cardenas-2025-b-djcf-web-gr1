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
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PlayersService } from '../players/players.service';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly playersService: PlayersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: 'number' })
  @ApiResponse({ status: 200, description: 'Equipo encontrado' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: 'number' })
  @ApiResponse({ status: 200, description: 'Equipo actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: 'number' })
  @ApiResponse({ status: 204, description: 'Equipo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.teamsService.delete(+id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener todos los jugadores de un equipo' })
  @ApiParam({ name: 'id', description: 'ID del equipo', type: 'number' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores del equipo' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado' })
  findPlayersByTeam(@Param('id') id: string) {
    // Verificar que el equipo existe
    this.teamsService.findOne(+id);
    return this.playersService.findByTeam(+id);
  }
}
