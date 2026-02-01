import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return await this.teamsRepository.find({ relations: ['players'] });
  }

  async findOne(id: number): Promise<Team> {
    const team = await this.teamsRepository.findOne({
      where: { id },
      relations: ['players'],
    });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  async create(team: Partial<Team>): Promise<Team> {
    const newTeam = this.teamsRepository.create(team);
    return await this.teamsRepository.save(newTeam);
  }

  async update(id: number, team: Partial<Team>): Promise<Team> {
    await this.findOne(id); // Verifica que existe
    await this.teamsRepository.update(id, team);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const team = await this.findOne(id);
    await this.teamsRepository.remove(team);
  }
}
