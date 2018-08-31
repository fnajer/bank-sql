import React from "react";

const clients = ({ data: client }) => {
  return (
    <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
      <div className="form__label-block form__label-block_id">
        <label>Идентификационный код</label>
        <input
          type="text"
          required
          minLength={10}
          maxLength={10}
          name="id_kliyent"
          value={client.id}
        />
      </div>
      <div className="form__label-block form__label-block_fio">
        <label>ФИО</label>
        <input
          type="text"
          required
          minLength={5}
          maxLength={40}
          name="fio_kliyent"
          value={client.name}
        />
      </div>
      <div className="form__label-block">
        <label>Номер паспорта</label>
        <input
          type="text"
          minLength={8}
          maxLength={8}
          required
          name="passport_kliyent"
          value={client.passport}
        />
      </div>
      <div className="form__label-block form__label-block_date_tel">
        <label>Дата рождения</label>
        <input
          type="date"
          required
          name="data_rozhdeniya_kliyent"
          value={client.date}
        />
        <label>Телефонный номер</label>
        <input
          minLength={12}
          maxLength={12}
          type="text"
          required
          name="telefon_kliyent"
          value={client.telephone}
        />
      </div>
      <div className="form__label-block form__label-block_address form__label-block-last">
        <label>Адрес прописки</label>
        <input
          minLength={5}
          maxLength={45}
          type="text"
          required
          name="adres_kliyent"
          value={client.address}
        />
      </div>
    </form>
  );
};

export default clients;
