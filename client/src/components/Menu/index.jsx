import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
      <div>
        <ul className="menu subheader__menu">
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Поставить зачет</a>
            </li>
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Принять экзамен</a>
            </li>
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Снести базу данных</a>
            </li>
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Занять место Коропа</a>
            </li>
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Позвать Шкандыбина</a>
            </li>
            <li className="menu__item menu-kap">  
              <a id="go" className="menu__link" data-table="kliyent">Вызвать дракона</a>
            </li>
            <li className="menu__item">  
              <a id="go" className="menu__link menu__link_active" data-table="kliyent">Клиенты</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" data-table="uslugi">Услуги</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" data-table="operatsii">Операции</a>
            </li>
            <li className="menu__item menu__link-del">
              <a className="menu__link" data-table="otdeleniye">Отделение</a>
            </li>
            <li className="menu__item menu__link-del">
              <a className="menu__link" data-table="sotrudnik">Сотрудники</a>
            </li>
            <li className="menu__item menu__link-del">
              <a className="menu__link" data-table="postavshchik">Поставщики</a>
            </li>
          </ul>
          <button className="subheader__menu-mobile-select" id="show_menu" />
      </div>
    )
  }
}

export default Menu
