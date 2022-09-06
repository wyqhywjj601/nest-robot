import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SendService } from './send/send.service';

@Module({
  imports: [],
  controllers: [AppController, GroupController],
  providers: [AppService, GroupService, SendService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
