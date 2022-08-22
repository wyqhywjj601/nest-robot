import { Controller, Get, Post } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  getHello(): string {
    return this.groupService.getHello();
  }

  @Get('sendMZ')
  sendMZ() {
    return this.groupService.sendMZ();
  }
}
