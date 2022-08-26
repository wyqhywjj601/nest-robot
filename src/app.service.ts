import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  wechat(request: Request){
    const {Event,content} = request?.body
    console.log(Event,content);
    switch (Event) {
      // 单聊
      case 'EventPrivateChat': 
      console.log(123123);
      
        
      break;
      // 群聊
      case 'EventGroupChat':
           
    
      default:
        break;
    }
    
    return {};
  }
}
