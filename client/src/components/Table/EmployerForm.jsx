import React from "react";

const employees = ({ data: employer }) => {
  return (
    <form
      name="slideChooseForm"
      method="post"
      action="/slideChoose_Articles"
    >
      <div className="form__label-block form__label-block_id">
        <label>Идентификационный код</label>
        <input type="text" maxLength={10} name="id_sotrudnik" value={employer.id} />
      </div>
      <div className="form__label-block form__label-block_fio">
        <label>ФИО</label>
        <input type="text" maxLength={40} name="fio_sotrudnik" value={employer.name}/>
      </div>
      <div className="form__label-block form__label-block_date_tel">
        <label>Номер паспорта</label>
        <input type="text" maxLength={8} name="passport_sotrudnik" value={employer.passport}/>
        <label>Телефонный номер</label>
        <input type="text" maxLength={12} name="telefon_sotrudnik" value={employer.telephone} />
      </div>
      <div
        className="form__label-block form__label-block_date_tel"
        style={{ width: 710 }}
      >
        <label style={{ marginRight: 15 }}>Дата рождения</label>
        <input
          type="date"
          name="data_rozhdeniya_sotrudnik"
          style={{ marginRight: 58 }}
          value={employer.date}
        />
        <label>Дата приема</label>
        <input type="date" name="data_priyema" value={employer.date}/>
      </div>
      <div
        className="form__label-block form__label-block_date_tel form__label-block-last"
        style={{ width: 706 }}
      >
        <label>Код должности</label>
        <input type="text" name="kod_dolzhnocti" style={{ marginRight: 43 }} />
        <label>Код отделения</label>
        <input type="text" name="kod_otdeleniye" />
      </div>
    </form>
  );
};

export default employees;
