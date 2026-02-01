import { TeamsService } from './teams.service';
import { Team } from './team.entity';
export declare class TeamsController {
    private readonly teamsService;
    constructor(teamsService: TeamsService);
    findAll(): Promise<Team[]>;
    findOne(id: string): Promise<Team>;
    create(team: Partial<Team>): Promise<Team>;
    update(id: string, team: Partial<Team>): Promise<Team>;
    remove(id: string): Promise<void>;
    getTeamPlayers(id: string): Promise<import("../players/player.entity").Player[]>;
}
