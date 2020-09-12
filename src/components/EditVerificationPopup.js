import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditVerificationPopup(props) {

  function handleDeleteClick(e) {
    e.preventDefault();
    props.onChangeText();
    props.onCardDelete(props.cardId);
  }

  const handleButtonText = (
    `${props.isText ? 'Сохранение...' : 'Да'}`
  );

  function overlayClick(e) {
    props.overlay(e.target);
  }

  return (
    <PopupWithForm
      overlayClick={overlayClick}
      onSubmit={handleDeleteClick}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Вы уверены?"
      name="verification"
      buttonText={handleButtonText}
      isText={props.isText}
    />
  )
}

export default EditVerificationPopup;
