import { PlayersService } from './players.service';
import { Player } from './player.entity';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    create(player: Partial<Player>): Promise<Player>;
    update(id: string, player: Partial<Player>): Promise<Player>;
    remove(id: string): Promise<void>;
}
