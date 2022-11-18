export const CLEAN_ALERT_BY_ID = '@alerts/CLEAN_ALERT_BY_ID';
export const CLEAN_ALL = '@alerts/CLEAN_ALL';
export const SET_ERROR = '@alerts/SET_ERROR';
export const SET_SUCCESS = '@alerts/SET_SUCCESS';

export const setError = (message: string) => ({
  type: SET_ERROR,
  payload: {
    error: message,
  },
});

export type SetErrorAction = ReturnType<typeof setError>;

export const setSuccess = (message: string) => ({
  type: SET_SUCCESS,
  payload: {
    message,
  },
});

export type SetSuccessAction = ReturnType<typeof setSuccess>;

export const cleanAlertById = (field: 'error' | 'success', id: number) => ({
  type: CLEAN_ALERT_BY_ID,
  payload: {
    field,
    id,
  },
});

export type CleanAlertByIdAction = ReturnType<typeof cleanAlertById>;

export const cleanAll = () => ({
  type: CLEAN_ALL,
});

export type CleanAll = ReturnType<typeof cleanAll>;
