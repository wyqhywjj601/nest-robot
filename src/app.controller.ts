import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Post('wechat')
  wechat(@Req() request: Request): object {
    return this.appService.wechat(request);
  }
  
}
