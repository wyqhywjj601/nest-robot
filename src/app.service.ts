import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

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
      console.log('接收到群聊消息');
      const {from_group, // 来源群
        from_name, // 来源
        msg // 回复内容
      } = content

      break;
      
      default:
        break;
    }

    return {};
  }

  trans(request: Request){

  }
}
