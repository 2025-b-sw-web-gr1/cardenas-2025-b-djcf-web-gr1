import { Module } from '@nestjs/common';
import { TeamsModule } from './teams/teams.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [TeamsModule, PlayersModule],
})
export class AppModule {}
