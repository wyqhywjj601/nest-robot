import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello() {
    return [1231];
  }

  wechat(request: Request){
    const {Event,content} = request?.body
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

  trans(request: Request){

  }
}
