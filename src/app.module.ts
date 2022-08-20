import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';

@Module({
  imports: [],
  controllers: [AppController, GroupController],
  providers: [AppService, GroupService],
})
export class AppModule {}
