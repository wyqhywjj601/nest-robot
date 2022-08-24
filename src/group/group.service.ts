import { Injectable } from '@nestjs/common';
import {
  getVideoData,
  savefileToPath,
  mathRandom,
  postWechat,
} from '../common/utils';
import axios from 'axios';
import { log } from 'console';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio');
const fs = require('fs');

@Injectable()
export class GroupService {
  getHello() {
    return postWechat('GetGroupMember', {
      group_wxid: '24388433906@chatroom',
    });
  }

  async sendMZ() {
    const videoId = mathRandom(1, 630);
    const fileFolder = 'E:\\project\\nest-robot\\video\\';
    const groupId = `24388433906@chatroom`;

    if (fs.existsSync(`${fileFolder}${videoId}.mp4`)) {
      console.log(`文件已存在`);
    } else {
      console.log('下载');
      let videoRes: any;

      try {
        const res = await axios.get(`https://mm.diskgirl.com/pc.html`);
        // 获取html
        const html = res.data;
        const $ = cheerio.load(html);
        const $video = $('#player');
        const videoSrc = $video.attr('src');
        console.log(videoSrc);

        // 判断视频文件是否已经下载
        videoRes = await getVideoData(videoSrc, 'binary');
      } catch (e) {}
      const { state, msg } = await savefileToPath(
        fileFolder,
        videoId,
        videoRes,
      );
    }

    const resData = {};

    // 发送
    // resData = postWechat('SendVideoMsg', {
    //   to_wxid: groupId,
    //   path: `${fileFolder}${videoId}.mp4`,
    // });

    return resData;
  }

  /**
   * 随机快手视频
   */
  async sendKuai() {
    const url = 'https://mm.diskgirl.com/get/get1.php';
    let videoSrc = await axios.get(url);
    videoSrc = videoSrc?.data;
    console.log(videoSrc, 'videoSrc');

    const videoRes = await getVideoData(videoSrc, 'binary', 'https');
    const fileFolder = 'E:\\project\\nest-robot\\video\\';
    const fileName = `kuaiVideo${new Date().getTime()}}`;
    const groupId = `24388433906@chatroom`;

    await savefileToPath(fileFolder, fileName, videoRes);
    console.log('save done');

    // 发送
    return postWechat('SendVideoMsg', {
      to_wxid: groupId,
      path: `${fileFolder}${fileName}.mp4`,
    });
  }
}
