import {INIT} from '../../typings/constants';
import type {NimbusDispatch} from '../../typings/nimbus';
import rpc from '../rpc';

export default function init() {
  return (dispatch: NimbusDispatch) => {
    dispatch({
      type: INIT,
      effect: () => {
        rpc.emit('init', null);
      }
    });
  };
}
