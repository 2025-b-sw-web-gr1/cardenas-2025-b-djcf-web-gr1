import { Repository } from 'typeorm';
import { Player } from './player.entity';
export declare class PlayersService {
    private playersRepository;
    constructor(playersRepository: Repository<Player>);
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    create(player: Partial<Player>): Promise<Player>;
    update(id: number, player: Partial<Player>): Promise<Player>;
    remove(id: number): Promise<void>;
}
