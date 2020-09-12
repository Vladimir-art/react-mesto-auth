import React from 'react';
import PopupWithForm from './PopupWithForm';
import { formConfig } from '../utils/utils';

function EditAvatarPopup(props) {

  const inputRef = React.useRef();

  const [isValid, setIsValid] = React.useState({
    formError: '',
    avatar: false,
    form: false
  });

  function handleInputError(e) {
    validateField(e.target, e.target.name);
  }

  function validateField(input, name) {
    let avatar = isValid.avatar;
    let form = isValid.form;
    let formError = isValid.formError;

    avatar = input.validity.valid;
    formError = avatar ? '' : input.validationMessage;
    form = avatar;

    setIsValid({
      formError: formError,
      avatar: avatar,
      form: form
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText();
    props.onUpdateAvatar(e.target, {
      avatar: inputRef.current.value,
    });
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Сохранить'}`
  );

  function overlayClick(e) {
    props.overlay(e.target);
  }

  function resetInput() { //сбрасываем введенные значания инпутов при клике на крестик
    props.onClose();
  }

  return (
    <PopupWithForm
      isButtonDisable={isValid.form}
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      defaultValue=""
      name="avatar"
      buttonText={handleButtonText}
      isOpen={props.isOpen}
      onClose={resetInput}
      children={
        <>
          <input className={`popup-container__infoform popup-container__infoform_avatar-link ${!isValid.avatar && formConfig.inputErrorClass}`}
            id="avatar-input"
            ref={inputRef}
            onChange={handleInputError}
            name="avatar"
            type="url"
            placeholder="Введите ссылку"
            required />
          <span className="popup-container__input-error">{isValid.formError}</span>
        </>
      }
    />
  )
}

export default EditAvatarPopup;
