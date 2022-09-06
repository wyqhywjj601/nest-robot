/*
https://docs.nestjs.com/interceptors#interceptors
*/
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

let requestSeq = 0;

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const host = context.switchToHttp();
      const request = host.getRequest<Request>();
      
      return next.handle()
  }
}
