import type { RootState } from '../rootReducer';
import type { AlertState } from './reducer';

export const getCurrentAlerts = (state: RootState): AlertState => {
  return state.alerts;
};
