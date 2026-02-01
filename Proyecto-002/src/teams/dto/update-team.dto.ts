import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDto {
  @ApiProperty({ example: 'Barcelona FC', description: 'Nombre del equipo', required: false })
  name?: string;

  @ApiProperty({ example: 'España', description: 'País del equipo', required: false })
  country?: string;

  @ApiProperty({ example: 1899, description: 'Año de fundación', required: false })
  foundedYear?: number;

  @ApiProperty({ example: 'Camp Nou', description: 'Estadio del equipo', required: false })
  stadium?: string;
}
