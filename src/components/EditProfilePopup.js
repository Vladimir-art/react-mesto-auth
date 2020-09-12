import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { formConfig } from '../utils/utils';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  //реализация управляемого компонента
  const [name, setName] = React.useState(''); //стетй с именем
  const [description, setDescription] = React.useState(''); //стейт с деятельностью
  const [valid, setValid] = React.useState({ //стейт для валидации
    formErrors: { author: '', job: '' }, //объект с текстом ошибок
    authorValid: true, //валидность поля с автором
    jobValid: true, //валидность с полем деятельности
    formValid: true, //валидность всей формы
  });

  React.useEffect(() => { //меняем стейты в зависимости от контекста currentUser
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeAuthor(e) { //меняем стейт при каждом изменении в поле инпута
    setName(e.target.value);
    validateField(e.target, e.target.name); //вызывем функцию по валидности (передаем инпут и его имя)
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
    validateField(e.target, e.target.name);
  }

  function validateField(input, inputName) {
    let inputValidationErrors = valid.formErrors; //все переменные берут первоначальные значения из стейта
    let authorValid = valid.authorValid;
    let jobValid = valid.jobValid;
    let formValid = valid.formValid;

    switch (inputName) {
      case 'author':
        authorValid = input.validity.valid;
        inputValidationErrors.author = authorValid ? '' : input.validationMessage;
        break;
      case 'job':
        jobValid = input.validity.valid;
        inputValidationErrors.job = jobValid ? '' : input.validationMessage;
        break;
      default:
        break;
    }

    formValid = authorValid && jobValid;

    setValid({
      formErrors: inputValidationErrors,
      authorValid: authorValid,
      jobValid: jobValid,
      formValid: formValid,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeText();
    props.onUpdateUser({
      name: name,
      about: description
    });
  }


  function resetAll() {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setValid({
      formErrors: { author: '', job: '' },
      authorValid: true,
      jobValid: true,
      formValid: true,
    })
  }

  function resetInput() { //сбрасываем введенные значания инпутов при клике на крестик
    props.onClose();
    resetAll()
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Сохранить'}`
  )

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      overlayClick={overlayClick}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit-form"
      buttonText={handleButtonText}
      isButtonDisable={valid.formValid}
      isOpen={props.isOpen}
      onClose={resetInput}
      children={
        <>
          <input className={`popup-container__infoform popup-container__infoform_author ${!valid.authorValid && formConfig.inputErrorClass}`}
            id="author"
            name="author"
            type="text"
            placeholder="Автор"
            defaultValue={name}
            minLength="2" maxLength="40"
            pattern="[A-Za-zА-ЯЁа-яё -]{1,}" required
            onChange={handleChangeAuthor} />
          <span className={`popup-container__input-error ${!valid.authorValid && formConfig.errorClass}`} id="author-input-error">{valid.formErrors.author}</span>
          <input className={`popup-container__infoform popup-container__infoform_author ${!valid.jobValid && formConfig.inputErrorClass}`}
            id="job"
            name="job"
            type="text"
            defaultValue={description}
            placeholder="О себе"
            minLength="2" maxLength="200" required
            onChange={handleChangeAbout} />
          <span className={`popup-container__input-error ${!valid.jobValid && formConfig.errorClass}`} id="job-input-error">{valid.formErrors.job}</span>
        </>
      }
    />
  )
}

export default EditProfilePopup;
