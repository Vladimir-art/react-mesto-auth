import React from 'react';

function Card(props) {

  const [error, setError] = React.useState(false); //стейт для проверки правильности ссылки

  function errorLoadImage(e) {
    e.target.setAttribute('src', 'https://image.freepik.com/free-vector/404_115790-50.jpg'); //усди ссылка неверна, загрузит стандартную картинку
    setError(true); //поменяет стейт
  }

  function handleDeleteClick(e) {
    props.onTrashClick(props.card, e.target.parentElement);
  }

  function handleClick(e) {
    !error && props.onCardClick(props.card); //если нет ошибки в картинке, то можно по ней кликать
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  const isOwn = props.card.owner._id === props.currentUser._id; // Определяем, являемся ли мы владельцем текущей карточки
  const cardDeleteButtonClassName = ( // Создаём переменную, которую после зададим в `className` для кнопки удаления
    `element__trash ${isOwn ? '' : 'element__trash_hidden'}`
  );


  const isLiked = props.card.likes.some(item => item._id === props.currentUser._id); // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const cardLikeButtonClassName = (// Создаём переменную, которую после зададим в `className` для кнопки лайка
    `element__button ${isLiked ? 'element__button_like-active' : ''}`
  );

  const cardLikeButtonHidden = ( //если есть ошибка то скрываем кнопку сердечко
    `${error && 'element__button_hidden'}`
  );

  const errorImageName = ( //если нет ошибки, то показываем текст, иначе пишем свой
    `${!error ? `${props.card.name}` : 'Упс, ошибка...'}`
  );

  const errorCountLike = ( //если есть ошибка, то скрываем кол-во лайков
    `element__count ${error && 'element__count_hidden'}`
  );

  return (
    <>
      <div className="element">
        <img className="element__image" alt="Изображение" src={props.card.link} onClick={handleClick} onError={errorLoadImage} /> {/*при клике вызывает ф-цию по смене стейта и передает данные о карточке в App*/}
        <div className="element__places">
          <h2 className="element__place">{errorImageName}</h2>
          <div className="element__likes">
            <button className={`${cardLikeButtonClassName} ${cardLikeButtonHidden}`} type="button" onClick={handleLikeClick}></button>
            <span className={errorCountLike}> {props.card.likes.length > 0 ? `${props.card.likes.length}` : 0} </span>
          </div>
        </div>
        <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      </div>
    </>
  )
}

export default Card;
