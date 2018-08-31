import React, { Component } from 'react'

import './slider.css';
import SliderControls from '../SliderControls';

export class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <ul className="slider__wrapper" data-current={0}>
          <li className="slider__slide slider__slide_1" data-currslide={0}>
            <div className="slider__layout layout">
              <div className="slider__info">
                <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
                  <div className="form__label-block form__label-block_id">
                    <label>Идентификационный код</label>
                    <input type="text" required minLength={10} maxLength={10} name="id_kliyent" min />
                  </div>
                  <div className="form__label-block form__label-block_fio">
                    <label>ФИО</label>
                    <input type="text" required minLength={5} maxLength={40} name="fio_kliyent" />
                  </div>
                  <div className="form__label-block">
                    <label>Номер паспорта</label>
                    <input type="text" minLength={8} maxLength={8} required name="passport_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_date_tel">
                    <label>Дата рождения</label>
                    <input type="date" required name="data_rozhdeniya_kliyent" />
                    <label>Телефонный номер</label>
                    <input minLength={12} maxLength={12} type="text" required name="telefon_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_address form__label-block-last">
                    <label>Адрес прописки</label>
                    <input minLength={5} maxLength={45} type="text" required name="adres_kliyent" />
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="slider__slide slider__slide_2" data-currslide={1}>
            <div className="slider__layout layout">
              <div className="slider__info">
                <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
                  <div className="form__label-block form__label-block_id">
                    <label>Идентификационный код</label>
                    <input type="text" name="id_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_fio">
                    <label>ФИО</label>
                    <input type="text" name="fio_kliyent" />
                  </div>
                  <div className="form__label-block">
                    <label>Номер паспорта</label>
                    <input type="text" name="passport_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_date_tel">
                    <label>Дата рождения</label>
                    <input type="date" name="data_rozhdeniya_kliyent" />
                    <label>Телефонный номер</label>
                    <input type="text" name="telefon_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_address form__label-block-last">
                    <label>Адрес прописки</label>
                    <input type="text" name="adres_kliyent" />
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="slider__slide slider__slide_3" data-currslide={2}>
            <div className="slider__layout layout">
              <div className="slider__info">
                <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
                  <div className="form__label-block form__label-block_id">
                    <label>Идентификационный код</label>
                    <input type="text" name="id_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_fio">
                    <label>ФИО</label>
                    <input type="text" name="fio_kliyent" />
                  </div>
                  <div className="form__label-block">
                    <label>Номер паспорта</label>
                    <input type="text" name="passport_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_date_tel">
                    <label>Дата рождения</label>
                    <input type="date" name="data_rozhdeniya_kliyent" />
                    <label>Телефонный номер</label>
                    <input type="text" name="telefon_kliyent" />
                  </div>
                  <div className="form__label-block form__label-block_address form__label-block-last">
                    <label>Адрес прописки</label>
                    <input type="text" name="adres_kliyent" />
                  </div>
                </form>
              </div>
            </div>
          </li>
        </ul>
        <SliderControls />
      </div>
    )
  }
}

export default Slider;
