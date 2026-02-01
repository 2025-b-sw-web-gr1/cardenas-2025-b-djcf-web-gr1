import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Lionel Messi', description: 'Nombre del jugador' })
  name: string;

  @ApiProperty({ example: 10, description: 'Número de camiseta' })
  number: number;

  @ApiProperty({ example: 'Delantero', description: 'Posición del jugador' })
  position: string;

  @ApiProperty({ example: 'Argentina', description: 'Nacionalidad del jugador' })
  nationality: string;

  @ApiProperty({ example: 1, description: 'ID del equipo al que pertenece' })
  teamId: number;
}
