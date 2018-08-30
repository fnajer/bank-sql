import React from 'react';
import './entry.css';

const EntryForm = () => {
  return (
    <div className="entry-block entry-block-hover">
      <h1 className="entry-block__title">Банк SQL</h1>
      <h1 className="entry-block__desc">Вход в панель управления базой данных</h1>
      <form action="/entry" method="post" name="entryForm">
        <div className="entry-block__line-form">
          <label>Имя</label>
          <input type="text" name="userName" /><br />
        </div>
        <div className="entry-block__line-form">
          <label>Пароль</label>
          <input type="password" name="userPassword" />
        </div>
        <input type="submit" defaultValue="Вход" />
      </form>
      <div className="entry-block__denied-block">
        <h2>Данные введены неверно. Доступ запрещен.</h2>
      </div>
    </div>
  )
}

export default EntryForm;
