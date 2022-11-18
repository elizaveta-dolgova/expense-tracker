import { SET_ERROR, CLEAN_ALERT_BY_ID, CLEAN_ALL, SET_SUCCESS } from './actions';
import type { SetErrorAction, SetSuccessAction, CleanAlertByIdAction } from './actions';
import type { StoreAction } from '../store';

export type Error = {
  message: string;
  id: number;
  expired: number;
};

export type Success = {
  message: string;
  id: number;
  expired: number;
};

export type AlertState = {
  error: Error[];
  success: Success[];
  counter: number;
};

const alertInitialState: AlertState = {
  error: [],
  success: [],
  counter: 0,
};

function setError(state: AlertState, action: SetErrorAction): AlertState {
  return {
    ...state,
    counter: state.counter++,
    error: [...state.error, { message: action.payload.error, id: state.counter, expired: 6000 }],
  };
}

function setSuccess(state: AlertState, action: SetSuccessAction): AlertState {
  return {
    ...state,
    counter: state.counter++,
    success: [...state.success, { message: action.payload.message, id: state.counter, expired: 6000 }],
  };
}

function cleanAlertById(state: AlertState, action: CleanAlertByIdAction): AlertState {
  const field = action.payload.field;
  const id = action.payload.id;
  const filteredErrors = state[field].filter((item) => item.id !== id);
  return { ...state, [field]: filteredErrors };
}

const reducer = (state: AlertState = alertInitialState, action: StoreAction) => {
  const { type } = action;

  switch (type) {
    case SET_ERROR:
      return setError(state, action as SetErrorAction);

    case SET_SUCCESS:
      return setSuccess(state, action as SetSuccessAction);

    case CLEAN_ALERT_BY_ID:
      return cleanAlertById(state, action as CleanAlertByIdAction);

    case CLEAN_ALL:
      return alertInitialState;

    default:
      return state;
  }
};

export default reducer;
