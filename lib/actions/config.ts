import type {configOptions} from '../../typings/config';
import {CONFIG_LOAD, CONFIG_RELOAD} from '../../typings/constants/config';
import type {NimbusActions} from '../../typings/nimbus';

export function loadConfig(config: configOptions): NimbusActions {
  return {
    type: CONFIG_LOAD,
    config
  };
}

export function reloadConfig(config: configOptions): NimbusActions {
  const now = Date.now();
  return {
    type: CONFIG_RELOAD,
    config,
    now
  };
}
