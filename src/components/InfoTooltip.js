import React from 'react';
import PopupWithForm from './PopupWithForm';
import authOk from '../images/Auth-ok.svg';
import authErr from '../images/Auth-err.svg';

function InfoTooltip(props) {

  return (
    <>
      <section className={`popup ${props.isOpen && 'popup_opened'}`}>
        <figure className="popup-auth">
          <img className="popup-auth__picture" src={authOk} alt="Изображение"/>
          <figcaption className="popup-auth__caption">Вы успешно зарегистрировались!</figcaption>
          <button className="popup-container__button-reset popup-container__button-reset_image" type="reset" aria-label="Close" onClick={props.onClose}></button>
        </figure>
      </section>
    </>
  )
}

export default InfoTooltip;
