import React from "react";

const keys = {
  id: 0,
  name: 1,
  passport: 2,
  telephone: 3,
  dateBirth: 4,
  dateEntry: 5,
  idPost: 6,
  idDepart: 7,
};

const employees = ({ data: employer, onChange }) => {
  return (
    <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
      <div className="form__label-block form__label-block_id">
        <label>Идентификационный код</label>
        <input
          type="text"
          maxLength={10}
          name="id"
          value={employer[keys.id]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_fio">
        <label>ФИО</label>
        <input
          type="text"
          maxLength={40}
          name="name"
          value={employer[keys.name]}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_date_tel">
        <label>Номер паспорта</label>
        <input
          type="text"
          maxLength={8}
          name="passport"
          value={employer[keys.passport]}
          onChange={onChange}
        />
        <label>Телефонный номер</label>
        <input
          type="text"
          maxLength={12}
          name="telephone"
          value={employer[keys.telephone]}
          onChange={onChange}
        />
      </div>
      <div
        className="form__label-block form__label-block_date_tel"
        style={{ width: 710 }}
      >
        <label style={{ marginRight: 15 }}>Дата рождения</label>
        <input
          type="date"
          name="date"
          style={{ marginRight: 58 }}
          value={employer[keys.dateBirth]}
          onChange={onChange}
        />
        <label>Дата приема</label>
        <input type="date" name="data_priyema" value={employer[keys.dateEntry]} />
      </div>
      <div
        className="form__label-block form__label-block_date_tel form__label-block-last"
        style={{ width: 706 }}
      >
        <label>Код должности</label>
        <input type="text" name="kod_dolzhnocti" style={{ marginRight: 43 }} value={employer[keys.idPost]} />
        <label>Код отделения</label>
        <input type="text" name="kod_otdeleniye" value={employer[keys.idDepart]} />
      </div>
    </form>
  );
};

export default employees;
