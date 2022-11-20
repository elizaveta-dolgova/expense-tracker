import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanAlertById, cleanAll } from '../redux/alerts/actions';
import { getCurrentAlerts } from '../redux/alerts/selectors';
import '../styles/AlertModal.scss';

const AlertModal = () => {
  const { error, success } = useSelector(getCurrentAlerts);
  const dispatch = useDispatch();
  const [errorId, setErrorId] = useState(0);
  const [successId, setSuccessId] = useState(0);



  return (
    <div className={`alert-container ${error.length || success.length ? 'alert-container--active' : ''} `}>
      {error.length !== 0 && (
        <div className="alert-container__content">
          <p className="alert-container__text alert-container__text--error">{error[errorId].message}</p>
          {error.length - 1 !== errorId && (
            <button
              onClick={() => {
                setErrorId((prevState) => prevState + 1);
                cleanAlertById('error', error[errorId].id);
              }}
            >
              next
            </button>
          )}
        </div>
      )}
      {success.length !== 0 && (
        <div className="alert-container__content">
          <p className="alert-container__text alert-container__text--success">{success[successId].message}</p>
          {success.length - 1 !== successId && (
            <button
              onClick={() => {
                setSuccessId((prevState) => prevState + 1);
                cleanAlertById('success', success[successId].id);
              }}
            >
              next
            </button>
          )}
        </div>
      )}
      <button
        className="alert-container__btn"
        onClick={() => {
          dispatch(cleanAll());
        }}
      >
        X
      </button>
    </div>
  );
};

export default AlertModal;
