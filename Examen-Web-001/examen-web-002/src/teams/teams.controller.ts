import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findOne(+id);
  }

  @Post()
  create(@Body() team: Partial<Team>): Promise<Team> {
    return this.teamsService.create(team);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() team: Partial<Team>): Promise<Team> {
    return this.teamsService.update(+id, team);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teamsService.remove(+id);
  }

  @Get(':id/players')
  async getTeamPlayers(@Param('id') id: string) {
    const team = await this.teamsService.findOne(+id);
    return team.players;
  }
}
