import { Injectable } from '@nestjs/common';
import {
  getVideoData,
  savefileToPath,
  mathRandom,
  postWechat,
} from '../common/utils';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');
const fs = require('fs');

@Injectable()
export class GroupService {
  getHello(): string {
    return postWechat('GetGrouplist', {});
  }

  async sendMZ() {
    const videoId = mathRandom(1, 630);
    const fileFolder = 'E:\\project\\nest-robot\\video\\';
    const groupId = `24388433906@chatroom`;
    console.log(videoId);

    if (fs.existsSync(`${fileFolder}${videoId}.mp4`)) {
      console.log(`文件已存在`);
    } else {
      console.log('下载');
      let videoRes: any;

      try {
        const res = await axios.get(
          `https://zhaoziyuan.me/dsp.html?id=${videoId}`,
        );
        // 获取html
        const html = res.data;
        const $ = cheerio.load(html);
        const $video = $('#myvideo>source');
        const videoSrc = $video.attr('src');
        // 判断视频文件是否已经下载
        videoRes = await getVideoData(videoSrc, 'binary');
      } catch (e) {
        return `刷痘印服务器挂啦（500）`;
      }
      const { state, msg } = await savefileToPath(
        fileFolder,
        videoId,
        videoRes,
      );
    }

    let resData = {};

    resData = postWechat('SendVideoMsg', {
      to_wxid: groupId,
      path: `${fileFolder}${videoId}.mp4`,
    });

    return resData;
  }
}
