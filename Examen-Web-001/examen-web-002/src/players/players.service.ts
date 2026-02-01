import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
  ) {}

  async findAll(): Promise<Player[]> {
    return await this.playersRepository.find({ relations: ['team'] });
  }

  async findOne(id: number): Promise<Player> {
    const player = await this.playersRepository.findOne({
      where: { id },
      relations: ['team'],
    });
    if (!player) {
      throw new NotFoundException(`Player with ID ${id} not found`);
    }
    return player;
  }

  async create(player: Partial<Player>): Promise<Player> {
    const newPlayer = this.playersRepository.create(player);
    return await this.playersRepository.save(newPlayer);
  }

  async update(id: number, player: Partial<Player>): Promise<Player> {
    await this.findOne(id); // Verifica que existe
    await this.playersRepository.update(id, player);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const player = await this.findOne(id);
    await this.playersRepository.remove(player);
  }
}
