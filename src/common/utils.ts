const http = require('http');
const fs = require('fs');
const token = 'aaaa';
const robot_wxid = 'dajio001';
import axios from 'axios';
import { WECHAT_API_URL } from './config';

// 获取视频数据
export const getVideoData = (url, encoding) => {
  return new Promise((resolve, reject) => {
    const req = http.get(url, function (res) {
      let result = '';
      encoding && res.setEncoding(encoding);
      res.on('data', function (d) {
        result += d;
      });
      res.on('end', function () {
        resolve(result);
      });
      res.on('error', function (e) {
        reject(e);
      });
    });
    req.end();
  });
};
/**
 * 下载视频到本地
 * @param fileFolder
 * @param fileName
 * @param fileData
 */
export const savefileToPath = (fileFolder, fileName, fileData) => {
  const fileFullName = `${fileFolder}/${fileName}.mp4`;
  return new Promise((resolve, reject) => {
    fs.writeFile(fileFullName, fileData, 'binary', function (err) {
      if (err) {
        console.log('savefileToPath error:', err);
      }
      resolve({
        state: 1,
        msg: '已下载',
      });
    });
  });
};
/**
 * 取随机整数区间
 * @param m
 * @param n
 */
export const mathRandom = (m, n) => {
  const aNumber = (n + 1 - m) * Math.random() + m;
  return Math.floor(aNumber);
};
/**
 * 发送微信
 * @param methodName
 * @param data
 */
export const postWechat = async (methodName: string, data: any) => {
  const res = await axios.post(WECHAT_API_URL, {
    ...data,
    api: methodName,
    token,
    robot_wxid,
  });
  console.log(res.data);
  return res.data;
};
