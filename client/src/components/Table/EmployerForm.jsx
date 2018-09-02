import React from "react";

const employees = ({ entity: employer, onChange }) => {
  return (
    <form name="slideChooseForm" method="post" action="/slideChoose_Articles">
      <div className="form__label-block form__label-block_id">
        <label>Идентификационный код</label>
        <input
          type="text"
          maxLength={10}
          name="id"
          value={employer.id}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_fio">
        <label>ФИО</label>
        <input
          type="text"
          maxLength={40}
          name="name"
          value={employer.name}
          onChange={onChange}
        />
      </div>
      <div className="form__label-block form__label-block_date_tel">
        <label>Номер паспорта</label>
        <input
          type="text"
          maxLength={8}
          name="passport"
          value={employer.passport}
          onChange={onChange}
        />
        <label>Телефонный номер</label>
        <input
          type="text"
          maxLength={12}
          name="telephone"
          value={employer.telephone}
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
          name="dateBirth"
          style={{ marginRight: 58 }}
          value={employer.dateBirth}
          onChange={onChange}
        />
        <label>Дата приема</label>
        <input type="date" name="dateEntry" value={employer.dateEntry} onChange={onChange} />
      </div>
      <div
        className="form__label-block form__label-block_date_tel form__label-block-last"
        style={{ width: 706 }}
      >
        <label>Код должности</label>
        <input type="text" name="idPost" style={{ marginRight: 43 }} value={employer.idPost} onChange={onChange} />
        <label>Код отделения</label>
        <input type="text" name="idDepart" value={employer.idDepart} onChange={onChange} />
      </div>
    </form>
  );
};

export default employees;
