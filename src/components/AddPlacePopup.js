import React from 'react';
import PopupWithForm from './PopupWithForm';
import { formConfig } from '../utils/utils';

function AddPlacePopup(props) {

  const inputName = React.useRef(); //инпут с названием карточки
  const inputLink = React.useRef(); //иипут с ссылкой
  const [valid, setValid] = React.useState({ //стейт для валидации
    formErrors: { name: '', link: '' }, //объект с текстом ошибок
    nameValid: false, //валидность поля с автором
    linkValid: false, //валидность с полем деятельности
    formValid: false //валидность всей формы
  });

  function handleInput(e) {
    if (e.target === inputName.current) {
      validateField(inputName.current, inputName.current.name)
    } else {
      validateField(inputLink.current, inputLink.current.name)
    }
  }

  function validateField(input, inputName) {
    let inputValidationErrors = valid.formErrors; //все переменные берут первоначальные значения из стейта
    let nameValid = valid.nameValid;
    let linkValid = valid.linkValid;
    let formValid = valid.formValid;

    switch (inputName) {
      case 'name':
        nameValid = input.validity.valid;
        inputValidationErrors.name = nameValid ? '' : input.validationMessage;
        break;
      case 'link':
        linkValid = input.validity.valid;
        inputValidationErrors.link = linkValid ? '' : input.validationMessage;
        break;
      default:
        break;
    }

    formValid = nameValid && linkValid;

    setValid({
      formErrors: inputValidationErrors,
      nameValid: nameValid,
      linkValid: linkValid,
      formValid: formValid,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText(); //меняем стейт текста на true
    props.onAddPlace(e.target, {
      name: inputName.current.value, //передаем хначания инпутов
      link: inputLink.current.value  //как объект в апи запрос
    })
    setValid({ //сбрасывам значения валидации (ума не приложу как ее сделать после апи, а не во врЕмя...)
      formErrors: { name: '', link: '' },
      nameValid: false,
      linkValid: false,
      formValid: false
    })
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Создать'}` //если стейт текста true ...
  );

  function resetInput() { //сбрасываем введенные значания инпутов при клике на крестик
    props.onClose();
    setValid({
      formErrors: { name: '', link: '' },
      nameValid: false,
      linkValid: false,
      formValid: false
    })
  }

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      isButtonDisable={valid.formValid}
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Новое место"
      name="add-place"
      buttonText={handleButtonText}
      isOpen={props.isOpen}
      onClose={resetInput}
      children={
        <>
          <input
            className={`popup-container__infoform popup-container__infoform_place-name ${!valid.nameValid && formConfig.inputErrorClass}`}
            id="place-input"
            defaultValue=""
            name="name"
            type="text"
            placeholder="Название"
            minLength="1" maxLength="30"
            ref={inputName} //получаем доступ к элементу
            onChange={handleInput}
            required
          />
          <span className={`popup-container__input-error ${!valid.nameValid && formConfig.errorClass}`} id="place-input-error">{valid.formErrors.name}</span>
          <input
            className={`popup-container__infoform popup-container__infoform_place-link ${!valid.linkValid && formConfig.inputErrorClass}`}
            id="link-input"
            defaultValue=""
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            ref={inputLink}
            onChange={handleInput}
            required
          />
          <span className={`popup-container__input-error ${!valid.linkValid && formConfig.errorClass}`}>{valid.formErrors.link}</span>
        </>
      }
    />
  )
}

export default AddPlacePopup;
