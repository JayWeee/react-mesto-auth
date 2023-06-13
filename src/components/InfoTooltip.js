import React from 'react';
import success from '../images/success.svg';
import failure from '../images/failure.svg';

function InfoTooltip({ isOpen, onClose, regStatusInfo }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__btn popup__btn_action_close"
          type="button"
        />
        <div className="popup__info-tooltip-container">
          <img
            className="popup__info-tooltip-image"
            src={regStatusInfo ? success : failure}
            alt="Статус регистрации"
          />
          <p className="popup__info-tooltip-caption">
            {regStatusInfo
              ? 'Вы успешно зарегистрировались!'
              : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
