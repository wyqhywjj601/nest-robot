import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('wechat')
  Wechat(@Req() request: Request): object {
    console.log(request.body);
    
    return {code:0}
  }
}
