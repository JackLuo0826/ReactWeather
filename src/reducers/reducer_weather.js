import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    //console.log('action received', action);
    switch (action.type) {
    case FETCH_WEATHER:
        // do not do state.push(blabla), never mutate state directly only return a new object instance.
        // instead do this: return state.concat([action.payload.data]);
        // or do this SE6 syntax:
        return [ action.payload.data, ...state ];
    }
    return state;
}