import { Injectable } from '@nestjs/common';
// @ts-ignore
import {
  // @ts-ignore
  getVideoData,
  // @ts-ignore
  savefileToPath,
  // @ts-ignore
  mathRandom,
  // @ts-ignore
  postWechat
} from '../common/utils';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');
const fs = require('fs');

@Injectable()
export class GroupService {
  getHello(): string {
    return 'Hello Worl222d!';
  }

  async sendMZ() {
    // const videoId = mathRandom(1, 630).toString();
    // const res = await axios.get(`https://zhaoziyuan.me/dsp.html?id=${videoId}`);
    // // 获取html 解析出想要的数据
    // const html = res.data;
    // const $ = cheerio.load(html);
    // const $video = $('#myvideo>source');
    // const videoSrc = $video.attr('src');
    // // 判断视频文件是否已经下载
    // const videoRes = await getVideoData(videoSrc, 'binary');
    // const fileFolder = '/Users/kluass/Desktop/project/wechat-robot/video';
    // const { state, msg } = await savefileToPath(fileFolder, videoId, videoRes);

    const videoId = '473'
    const state = true
    const fileFolder = '/Users/kluass/Desktop/project/wechat-robot/video'
    if (state) {
      const groupId = `25286230018@chatroom`;
      const res = postWechat('SendVideoMsg', {
        to_wxid: groupId,
        path: `${fileFolder}${videoId}.mp4`,
      });

      return res;
    }
  }
}
