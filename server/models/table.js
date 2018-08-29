
class Table {

  takeAllData(callback) {

    if (currentTable == 'uslugi') {
      
      var query = `SELECT id_uslugi,name_uslugi,ctoimoct_uslugi,name_postavshchik FROM uslugi,postavshchik where uslugi.kod_postavshchik=postavshchik.id_postavshchik ORDER BY id_uslugi;`;
    } else {
      var query = `SELECT * FROM ${currentTable}`;
    }

    connection.query(query,
      (error, result) => {
        
        callback(error, result);
      });
  }

  deleteRow(searchId, nameId, callback) {

    connection.query(`DELETE FROM ${currentTable} WHERE ${nameId}=${searchId};`,
      (error, result) => {

        callback(error);
      });
  }

  insertRow(newString, callback) {
    connection.query(`INSERT INTO ${currentTable} SET ?`, newString, (error, result) => {
      
      callback(error, result);

    });
  }

  selectMaxId(callback) {
    connection.query(`SELECT * FROM ${currentTable} WHERE id_operatsii = (SELECT MAX(id_operatsii) FROM ${currentTable} ORDER BY id_operatsii);`, 
    (error, result) => {
      
      callback(error, result);
    });
  }

  insertService(i, currentId, jsonServices, callback) {

    connection.query(`INSERT INTO operatsii_has_uslugi VALUES (${currentId}, ${jsonServices[i]})`,
    (error, result) => {

      callback(error, result);
    });
  }

  updateRow(newString, key, nameId, searchId, callback) {
    connection.query(`UPDATE ${currentTable} SET ${key}='${newString[key]}' WHERE ${nameId}=${searchId};`, 
    (error, result) => {
      
      callback(error, result);
    });
  }

  deleteServices(searchId, callback) {
    connection.query(`DELETE FROM operatsii_has_uslugi WHERE kod_operatsii=${searchId}`,
    (error, result) => {

      callback(error, result);
    });
  }

  getSortData(callback) {
    let fieldSort = getFieldSort();

    connection.query(`SELECT * FROM ${currentTable} ORDER BY ${fieldSort}`,
      (err, result) => {
        callback(error, result);
      });
  }

  getSortDescData(callback) {
    let fieldSort = getFieldSort();

    connection.query(`SELECT * FROM ${currentTable} ORDER BY ${fieldSort} DESC`,
      (err, result) => {
        callback(error, result);
      });
  }

  selectOperation(printId, callback) {
    connection.query(`SELECT nomer_otdeleniye, gorod_otdeleniye, tranzitnyy_schet, data_operatsii, fio_kliyent, telefon_kliyent, adres_kliyent,fio_sotrudnik,name_dolzhnoct FROM operatsii,sotrudnik,otdeleniye,kliyent,dolzhnoct WHERE operatsii.kod_kliyent=kliyent.id_kliyent AND operatsii.kod_sotrudnik=sotrudnik.id_sotrudnik AND sotrudnik.kod_otdeleniye=otdeleniye.id_otdeleniye AND sotrudnik.kod_dolzhnocti=dolzhnoct.id_dolzhnoct AND id_operatsii=${printId};`, (error, result) => {

        callback(error, result);
      });
  }

  selectServices(printId, callback) {
    connection.query(`SELECT name_uslugi,ctoimoct_uslugi,name_postavshchik,raschetnyy_schet FROM uslugi,postavshchik,operatsii_has_uslugi WHERE operatsii_has_uslugi.kod_uslugi=uslugi.id_uslugi AND uslugi.id_uslugi=postavshchik.id_postavshchik AND operatsii_has_uslugi.kod_operatsii=${printId};`,
      (error, result) => {

        callback(error, result);
      });
  }

  getSumServices(printId, callback) {
    connection.query(`SELECT SUM(ctoimoct_uslugi) AS sum FROM uslugi,operatsii_has_uslugi WHERE operatsii_has_uslugi.kod_uslugi=uslugi.id_uslugi AND operatsii_has_uslugi.kod_operatsii=${printId};`,
      (error, result) => {
      
        callback(error, result);
      });
  }
}

module.exports = new Table;

// Вспомогательные методы
function getFieldSort() {
  var fieldSort;
  switch(currentTable) {
    case 'uslugi':
      fieldSort = `name_uslugi`;
      break;
    case 'kliyent':
      fieldSort = `fio_kliyent`;
      break;
    case 'sotrudnik':
      fieldSort = `fio_sotrudnik`;
      break;
    case 'operatsii':
      fieldSort = `summa_operatsii`;
      break;
    case 'otdeleniye':
      fieldSort = `nomer_otdeleniye`;
      break;
    case 'postavshchik':
      fieldSort = `name_postavshchik`;
      break;
  }
  return fieldSort;
}