import type {Dispatch, Middleware} from 'redux';

import type {NimbusActions, NimbusState} from '../../typings/nimbus';
import terms from '../terms';

// the only side effect we perform from middleware
// is to write to the react term instance directly
// to avoid a performance hit
const writeMiddleware: Middleware<object, NimbusState, Dispatch<NimbusActions>> =
  () => (next) => (action: NimbusActions) => {
    if (action.type === 'SESSION_PTY_DATA') {
      const term = terms[action.uid];
      if (term) {
        term.term.write(action.data);
      }
    }
    next(action);
  };

export default writeMiddleware;
