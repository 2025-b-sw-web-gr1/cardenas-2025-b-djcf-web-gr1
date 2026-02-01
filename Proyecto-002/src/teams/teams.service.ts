import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './interfaces/team.interface';

@Injectable()
export class TeamsService {
  private teams: Team[] = [
    {
      id: 1,
      name: 'Barcelona FC',
      country: 'España',
      foundedYear: 1899,
      stadium: 'Camp Nou',
    },
    {
      id: 2,
      name: 'Real Madrid',
      country: 'España',
      foundedYear: 1902,
      stadium: 'Santiago Bernabéu',
    },
  ];

  private currentId = 3;

  findAll(): Team[] {
    return this.teams;
  }

  findOne(id: number): Team {
    const team = this.teams.find((t) => t.id === id);
    if (!team) {
      throw new NotFoundException(`Equipo con id ${id} no encontrado`);
    }
    return team;
  }

  create(createTeamDto: CreateTeamDto): Team {
    const newTeam: Team = {
      id: this.currentId++,
      ...createTeamDto,
    };
    this.teams.push(newTeam);
    return newTeam;
  }

  update(id: number, updateTeamDto: UpdateTeamDto): Team {
    const teamIndex = this.teams.findIndex((t) => t.id === id);
    if (teamIndex === -1) {
      throw new NotFoundException(`Equipo con id ${id} no encontrado`);
    }
    this.teams[teamIndex] = {
      ...this.teams[teamIndex],
      ...updateTeamDto,
    };
    return this.teams[teamIndex];
  }

  delete(id: number): void {
    const teamIndex = this.teams.findIndex((t) => t.id === id);
    if (teamIndex === -1) {
      throw new NotFoundException(`Equipo con id ${id} no encontrado`);
    }
    this.teams.splice(teamIndex, 1);
  }
}
