import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Barcelona FC', description: 'Nombre del equipo' })
  name: string;

  @ApiProperty({ example: 'España', description: 'País del equipo' })
  country: string;

  @ApiProperty({ example: 1899, description: 'Año de fundación' })
  foundedYear: number;

  @ApiProperty({ example: 'Camp Nou', description: 'Estadio del equipo' })
  stadium: string;
}
