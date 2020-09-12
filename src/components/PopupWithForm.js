import React from 'react';

function PopupWithForm(props) {

  return (
    <>
      <section className={`popup popup__${props.name} ${props.isOpen && 'popup_opened'}`} onClick={props.overlayClick}>
        <form className={`popup-container popup-container__${props.name}`} name="form" method="POST" action="#" onSubmit={props.onSubmit} noValidate>
          <h2 className="popup-container__text">{props.title}</h2>
          <fieldset className="popup-container__info">
            {props.children}
            <button
              className={`popup-container__button-add ${!props.isButtonDisable && props.isButtonDisable !== undefined ? 'popup-container__button-add_error' : ''}`}
              type="submit"
              disabled={!props.isButtonDisable && props.isButtonDisable !== undefined}>
              {props.buttonText}
            </button>
          </fieldset>
          <button className="popup-container__button-reset" type="reset" aria-label="Close" onClick={props.onClose}></button>
        </form>
      </section>
    </>
  )
}

export default PopupWithForm;
