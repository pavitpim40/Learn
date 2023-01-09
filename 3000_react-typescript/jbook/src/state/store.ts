import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

// ### TEST REDUX MANUALLY
// const state = store.getState();
// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: 'a',
//     type: 'text',
//   },
// });

// store.dispatch({
//   type: ActionType.INSERT_CELL_BEFORE,
//   payload: {
//     id: 'a',
//     type: 'code',
//   },
// });

// console.log(store.getState());
