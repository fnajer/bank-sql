import React from "react";

const keys = {
  id: 0,
  name: 1,
  passport: 2,
  date: 3,
  telephone: 4,
  address: 5,
};

const clients = ({ data: client, onChange }) => {
  
  return (
    <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
      <div className="form__label-block form__label-block_id">
        <label>Идентификационный код</label>
        <input
          type="text"
          required
          minLength={10}
          maxLength={10}
          name="id"
          value={client[keys.id]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_fio">
        <label>ФИО</label>
        <input
          type="text"
          required
          minLength={5}
          maxLength={40}
          name="name"
          value={client[keys.name]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block">
        <label>Номер паспорта</label>
        <input
          type="text"
          minLength={8}
          maxLength={8}
          required
          name="passport"
          value={client[keys.passport]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_date_tel">
        <label>Дата рождения</label>
        <input
          type="date"
          required
          name="date"
          value={client[keys.id]}
          onChange={onChange}
        />
        <label>Телефонный номер</label>
        <input
          minLength={12}
          maxLength={12}
          type="text"
          required
          name="telephone"
          value={client[keys.telephone]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_address form__label-block-last">
        <label>Адрес прописки</label>
        <input
          minLength={5}
          maxLength={45}
          type="text"
          required
          name="address"
          value={client[keys.address]}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default clients;
