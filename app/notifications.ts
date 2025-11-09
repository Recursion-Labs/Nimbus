import type {BrowserWindow} from 'electron';

import fetch from 'electron-fetch';
import ms from 'ms';

import {version} from './package.json';

const NEWS_URL = 'https://api.github.com/repos/vercel/hyper/releases/latest'; // Using GitHub releases as fallback

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
      
      // Handle GitHub API response format
      if (data.tag_name && data.html_url) {
        const currentVersion = version;
        const latestVersion = data.tag_name.replace('v', '');
        
        // Simple version comparison
        if (latestVersion > currentVersion) {
          const message = {
            text: `A new version (${latestVersion}) is available!`,
            url: data.html_url,
            dismissable: true
          };
          rpc.emit('add notification', message);
          console.log(`New version available: ${latestVersion}`);
        } else {
          console.log('No new version available');
        }
      } else {
        console.log('No valid notification data found');
      }

      retry();
    })
    .catch((err) => {
      if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
        console.log('Notification service unavailable (network error), will retry later');
      } else if (err.message?.includes('URL')) {
        console.log('Notification service URL error, skipping notifications:', err.message);
      } else {
        console.error('Notification fetch error:', err.message);
      }
      retry(err);
    });
}
