import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext); //получаем объект о пользвателе из контекста

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__cover">
            <div className="profile__information">
              <figure className="profile__background" onClick={props.onEditAvatar}></figure> {/*при клике на аву меняем стейт на true и передем в компонент App*/}
              <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
            </div>
            <div className="profile__info">
              <div className="profile__reg">
                <h1 className="profile__author">{currentUser.name}</h1>
                <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button> {/*при клике на редактор инфы меняем стейт на true и передем в компонент App*/}
              </div>
              <p className="profile__specialty">{currentUser.about}</p>
            </div>
          </div>
          <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button> {/*при клике на + меняем стейт на true и передем в компонент App*/}
        </section>

        <section className="elements"> {/*передаем в Card информацию о каждой карточке, приcваиваем каждой карточке key и передаем ф-цию по смене флага при нажатии на картинку*/}
          {props.cards.map((item) => {
            return (
              <Card card={item}
                key={item._id}
                onCardClick={props.onCardClick}
                currentUser={currentUser}
                onCardLike={props.onCardLike}
                onTrashClick={props.onTrashClick} />
            );
          })}
        </section>
      </main>
    </>
  )
}

export default Main
