import React from 'react';
import authOk from '../images/Auth-ok.svg';
import authErr from '../images/Auth-err.svg';

function InfoTooltip(props) {

  const handleText = ( // если есть тект ошибки, меняет тект в окошке
    `${props.isEnter ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'}`
  )

  const handleImage = ( // если есть тект ошибки, меняет картинку в окошке
    `${props.isEnter ? authErr : authOk}`
  )

  return (
      <section className={`popup ${props.isOpen && 'popup_opened'}`}>
        <figure className="popup-auth">
          <img className="popup-auth__picture" src={handleImage} alt="Изображение"/>
          <figcaption className="popup-auth__caption">{handleText}</figcaption>
          <button className="popup-container__button-reset popup-container__button-reset_image" type="reset" aria-label="Close" onClick={props.onClose}></button>
        </figure>
      </section>
  )
}

export default InfoTooltip;
