import {NOTIFICATION_MESSAGE, NOTIFICATION_DISMISS} from '../../typings/constants/notifications';
import type {NimbusActions} from '../../typings/nimbus';

export function dismissNotification(id: string): NimbusActions {
  return {
    type: NOTIFICATION_DISMISS,
    id
  };
}

export function addNotificationMessage(text: string, url: string | null = null, dismissable = true): NimbusActions {
  return {
    type: NOTIFICATION_MESSAGE,
    text,
    url,
    dismissable
  };
}
