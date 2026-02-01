import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Lionel Messi',
      number: 10,
      position: 'Delantero',
      nationality: 'Argentina',
      teamId: 1,
    },
    {
      id: 2,
      name: 'Gerard Piqué',
      number: 3,
      position: 'Defensa',
      nationality: 'España',
      teamId: 1,
    },
    {
      id: 3,
      name: 'Sergio Ramos',
      number: 4,
      position: 'Defensa',
      nationality: 'España',
      teamId: 2,
    },
  ];

  private currentId = 4;

  findAll(): Player[] {
    return this.players;
  }

  findOne(id: number): Player {
    const player = this.players.find((p) => p.id === id);
    if (!player) {
      throw new NotFoundException(`Jugador con id ${id} no encontrado`);
    }
    return player;
  }

  findByTeam(teamId: number): Player[] {
    return this.players.filter((p) => p.teamId === teamId);
  }

  create(createPlayerDto: CreatePlayerDto): Player {
    const newPlayer: Player = {
      id: this.currentId++,
      ...createPlayerDto,
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto): Player {
    const playerIndex = this.players.findIndex((p) => p.id === id);
    if (playerIndex === -1) {
      throw new NotFoundException(`Jugador con id ${id} no encontrado`);
    }
    this.players[playerIndex] = {
      ...this.players[playerIndex],
      ...updatePlayerDto,
    };
    return this.players[playerIndex];
  }

  delete(id: number): void {
    const playerIndex = this.players.findIndex((p) => p.id === id);
    if (playerIndex === -1) {
      throw new NotFoundException(`Jugador con id ${id} no encontrado`);
    }
    this.players.splice(playerIndex, 1);
  }
}
