import type {BrowserWindow} from 'electron';

import fetch from 'electron-fetch';
import ms from 'ms';

import {version} from './package.json';

const NEWS_URL = 'https://nimbus-news.vercel.app';

export default function fetchNotifications(win: BrowserWindow) {
  const {rpc} = win;
  const retry = (err?: Error) => {
    setTimeout(() => fetchNotifications(win), ms('30m'));
    if (err) {
      console.error('Notification messages fetch error', err.stack);
    }
  };
  console.log('Checking for notification messages');
  fetch(NEWS_URL, {
    headers: {
      'X-Nimbus-Version': version,
      'X-Nimbus-Platform': process.platform
    }
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 404) {
          console.log('Notification service not available (404), skipping');
          retry();
          return null;
        }
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.log('Notification service returned non-JSON response, skipping');
        retry();
        return null;
      }
      return res.json();
    })
    .then((data) => {
      if (!data) {
        return;
      }
      const message: {text: string; url: string; dismissable: boolean} | '' = data.message || '';
      if (typeof message !== 'object' && message !== '') {
        throw new Error('Bad response');
      }
      if (message === '') {
        console.log('No matching notification messages');
      } else {
        rpc.emit('add notification', message);
      }

      retry();
    })
    .catch(retry);
}
