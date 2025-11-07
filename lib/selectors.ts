import {createSelector} from 'reselect';

import type {NimbusState} from '../typings/nimbus';

const getTermGroups = ({termGroups}: Pick<NimbusState, 'termGroups'>) => termGroups.termGroups;
export const getRootGroups = createSelector(getTermGroups, (termGroups) =>
  Object.keys(termGroups)
    .map((uid) => termGroups[uid])
    .filter(({parentUid}) => !parentUid)
);
