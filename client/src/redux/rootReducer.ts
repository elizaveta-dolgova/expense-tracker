import { combineReducers } from 'redux';

import expenseReducer from './expenses/reducer';
import alertReducer from './alerts/reducer';

export const rootReducer = combineReducers({
  expenses: expenseReducer,
  alerts: alertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
