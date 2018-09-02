import React, { Component } from 'react';

import './toolbar.css';

export class Toolbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__layout layout">
          <div className="login header__login">
            <div className="login__item">
              <img className="login__icon" src="/assets/images/profile-plus.svg" alt="icon" />
              <a className="login__link link" id="btn-insert" href="#">Добавить</a>
            </div>
            <div className="login__item">
              <img className="login__icon" src="/assets/images/profile.svg" alt="icon" />
              <a className="login__link link btn-change" href="#">Изменить</a>
            </div>
            <div className="login__item login__item-del">
              <img className="login__icon login__icon-delete" src="/assets/images/close-del.svg" alt="icon" />
              <a className="login__link link btn-drop" href="#">Удалить</a>
            </div>
          </div>
          <div id="print"><img src="/assets/images/printer.png" alt="print" /></div>
          <div id="sort">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGzSURBVFhH7ZbBSsNAEIYj6kURTyqoIHgS8eAbCD5DK81uUfBQEUUFEa12s4KPoGSTWi+CFw/iA3gSRfFYFbx69RWE1pk4MW2x6W4REcwHS/ff7OabhELG+rOUthb7fJnroWgEnq1aVgdFM07yqQFPsEfl8DLOaVkb5bArV2ZnKeoDhwZB+gSj4jm82k4BUs500VSfSMzu4ffsc7AHXDMpwBd8x5f2BMXWHOczQ/Cqn1Hsb6f7leAujmBOBWBxtD0WVeBzhzIzTDEevCmKYdyhDNdCOc7DAnCPzhs42mNjfi7XTTEez7GXPYddh2KkVo7gNfgP3MAbWKKlpsC9XpTkKYrmNMpNUIK9egXGKJqTyCkakcgpmpPIKRqRyCmak8gpGvFrcley8dPNbC/FgO/kuO88ne6kGA98tw9Avk+xKfCNv8RGo74XqJe7BTvjCf5elGyaln6Gmr7vq4BaeSiGsYFZC3iiBeXYnGIsjQWE8kjM1mirHnDDKWiFJim2JOr1g2bzDVqpi7bESFHyUbU7P0JRCywAxGXq9ytKZFfpkhlweB2qX6GoTVCAYLftnP0PWNYH8YVUmcMq//kAAAAASUVORK5CYII=" />
          </div>
          <div className="header__info">
            <form className="header__search-form">
              <input className="header__input" type="text" placeholder="Введите запрос..." />
              <input className="header__submit" type="submit" defaultValue="" />
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Toolbar;
