import React, { Component } from 'react'

import './navbar.css';
import Menu from '../Menu';

export class Navbar extends Component {
  render() {
    return (
      <nav className="subheader">
        <div className="subheader__layout layout">
          <a className="subheader__logo-link">
            <img className="subheader__logo" src="/assets/images/mysql-logo.jpg" width={66} height={66} alt="logo" />
          </a>
          <h1 className="subheader__caption">Панель управления</h1>
          <Menu />
          <nav className="sidebar-mobile">
            <header className="header header_menu_mobile">
              <div className="login">
                <div className="login__item status">
                  <span>Статус - <a className="login__link link" href="#"> Администратор</a></span>
                </div>
              </div>
              <span className="menu-mobile__close">
                <img className="menu-mobile__close-icon" id="close_menu" src="images/close-del.svg" />
              </span>
            </header>
            <div className="block-admin-query">
              <form action="/232" method="post" name="queryAdminForm">
                <input type="text" placeholder="Введите SQL-запрос" name="fieldQuery" className="field-query" />
              </form>
            </div>
            <ul className="menu-mobile">
              <li className="menu-mobile__item">
                <form action="/user/add" name="addUserForm" method="post">
                  <h2>Добавление пользователей</h2>
                  <label>Имя</label>
                  <input type="text" name="addUsername" />
                  <label>Пароль</label>
                  <input type="text" name="addPassword" />
                  <div>
                    <input type="submit" defaultValue="Добавить" />
                  </div>
                </form>
              </li>
              <li className="menu-mobile__header">
                <span className="menu-mobile__caption">Список пользователей</span>
              </li>
              <li className="menu-mobile__item">
                <a className="menu-mobile__link menu-mobile__link_active">Администратор (root)
                </a>
              </li>
              <div id="forUsers">
              </div>
            </ul>
          </nav>
        </div>
      </nav>    
    )
  }
}

export default Navbar;
