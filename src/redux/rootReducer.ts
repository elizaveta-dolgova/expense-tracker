import { combineReducers } from 'redux';

import expenseReducer from './expenses/reducer';

export const rootReducer = combineReducers({
  expenses: expenseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
