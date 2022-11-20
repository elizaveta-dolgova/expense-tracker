import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanAlertById, cleanAll } from '../redux/alerts/actions';
import { getCurrentAlerts } from '../redux/alerts/selectors';
import '../styles/AlertModal.scss';

const AlertModal = () => {
  const { error, success } = useSelector(getCurrentAlerts);
  const dispatch = useDispatch();
  const [errorIndex, setErrorIndex] = useState(0);
  const [successIndex, setSuccessIndex] = useState(0);
  const removeErrorById = () => {
    if (errorIndex === error.length - 1) {
      if (errorIndex === 0) {
        setErrorIndex(0);
      } else {
        setErrorIndex((prevState) => prevState - 1);
      }
    }
    dispatch(cleanAlertById('error', error[errorIndex].id));
  };

  const removeSuccessById = () => {
    if (successIndex === success.length - 1) {
      if (successIndex === 0) {
        setSuccessIndex(0);
      } else {
        setSuccessIndex((prevState) => prevState - 1);
      }
    }
    dispatch(cleanAlertById('success', success[successIndex].id));
  };

  return (
    <div className={`alert-container ${error.length || success.length ? 'alert-container--active' : ''} `}>
      {error.length !== 0 && (
        <div className="alert-container__content">
          <p className="alert-container__text alert-container__text--error">{error[errorIndex].message}</p>
          {errorIndex !== 0 && <button onClick={() => setErrorIndex((prevState) => prevState - 1)}>back</button>}
          {error.length - 1 !== errorIndex && (
            <button
              onClick={() => {
                setErrorIndex((prevState) => prevState + 1);
              }}
            >
              next
            </button>
          )}
          <button onClick={removeErrorById}>OK</button>
        </div>
      )}
      {success.length !== 0 && (
        <div className="alert-container__content">
          <p className="alert-container__text alert-container__text--success">{success[successIndex].message}</p>
          {successIndex !== 0 && <button onClick={() => setSuccessIndex((prevState) => prevState - 1)}>back</button>}
          {success.length - 1 !== successIndex && (
            <button
              onClick={() => {
                setSuccessIndex((prevState) => prevState + 1);
              }}
            >
              next
            </button>
          )}
          <button onClick={removeSuccessById}>OK</button>
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
