const Table = require('../models/table.js');

module.exports = {
  dropData: dropData,
  changeData: changeData,
  insertData: insertData,
  transition: transition,
  printData: printData,
  sortData: sortData,
  sortDescData: sortDescData
};

function dropData (request, response) {
  if(!request.body) return response.sendStatus(400);

  let searchId = request.body.searchId;
  let nameId = request.body.nameId;

  Table.deleteRow(searchId, nameId, (error) => {
    if (error) {
      console.log('Проблемы с соединением к БД при обработке /table/dropData. function deleteRow.');
      return response.json(error);
    }
    console.log(`Запись #${searchId} из таблицы ${currentTable} удалена.`);

    Table.takeAllData((error, result) => {
      if (error) { 
        console.log('Проблемы с соединением к БД при обработке /table/dropData. function takeAllData.');
        return response.json(error);
      }

      console.log(`Данные таблицы ${currentTable} обновлены.`);
      response.json(result);
    });
  });

}

function changeData (request, response) {
  if(!request.body) return response.sendStatus(400);

  var newString = request.body;

  for (let key in newString) {
    var firstLetters = key.slice(0, 2);
    
    if (firstLetters == 'id') {
      var nameId = key;
      var currentId = newString[key];
      break;
    }
  }

  if (currentTable == 'operatsii') {

    var jsonServices = newString.choose_uslugi.split(',');
    delete newString.choose_uslugi;
  }

  for (let key in newString) {
    Table.updateRow(newString, key, nameId, currentId, (error, result) => {
      if (error) { 
        console.log('Проблемы с соединением к БД при обработке /table/changeData. function updateRow.');
        return response.json(error);
      }

      console.log(`Поле ${key} таблицы ${currentTable} изменено на ${newString[key]}.`);
    });
  }

  if (currentTable == 'operatsii') {

    Table.deleteServices(currentId, (error, result) => {

      if (error) {
        console.log('Проблемы с соединением к БД');
        return response.json(error);
      }

      var i = 0;
      Table.insertService(i, currentId, jsonServices, recursiveInsertCallback);

      function recursiveInsertCallback(error, result) {
        if (error) { 
          console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->insertService.');
          return response.json(error);
        }

        i++;
        if (i < jsonServices.length) {

          console.log(`Услуга ${jsonServices[i-1]} для операции ${currentId} в таблицу ${currentTable} добавлена.`);
          
          Table.insertService(i, currentId, jsonServices, recursiveInsertCallback);
        } else {

          console.log(`Услуга ${jsonServices[i-1]} для операции ${currentId} в таблицу ${currentTable} добавлена.`);

          Table.takeAllData((error, result) => {
            if (error) { 
              console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->takeAllData.');
              return response.json(error);
            }

            console.log(`Данные таблицы ${currentTable} обновлены.`);
            response.json(result);
          });
        }
      }

    });

  } else {
    console.log(`Запись в таблице ${currentTable} обновлена.`);

    Table.takeAllData((error, result) => {
      if (error) { 
        console.log('Проблемы с соединением к БД при обработке /table/change. function changeData->takeAllData.');
        return response.json(error);
      }

      console.log(`Данные таблицы ${currentTable} обновлены.`);
      response.json(result);
    });
  }

}

function insertData (request, response) {
  if(!request.body) return response.sendStatus(400);

  var newString = request.body;

  if (currentTable == 'operatsii') {

    var jsonServices = newString.choose_uslugi.split(',');
    delete newString.choose_uslugi;
  }

  Table.insertRow(newString, (error, result) => {
    if (error) {
      console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->insertRow.');
      return response.json(error);
    }

    if (currentTable == 'operatsii') {

      console.log(`Запись операции в таблицу ${currentTable} добавлена.`);

      Table.selectMaxId((error, result) => {
        if (error) { 
          console.log('Проблемы с соединением к БД');
          return response.json(error);
        }
        
        var currentId = result[0].id_operatsii;

        var i = 0;
        Table.insertService(i, currentId, jsonServices, recursiveInsertCallback);

        function recursiveInsertCallback(error, result) {
          if (error) { 
            console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->insertService.');
            return response.json(error);
          }

          i++;
          if (i < jsonServices.length) {

            console.log(`Услуга ${jsonServices[i-1]} для операции ${currentId} в таблицу ${currentTable} добавлена.`);
            
            Table.insertService(i, currentId, jsonServices, recursiveInsertCallback);
          } else {

            console.log(`Услуга ${jsonServices[i-1]} для операции ${currentId} в таблицу ${currentTable} добавлена.`);

            Table.takeAllData((error, result) => {
              if (error) { 
                console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->takeAllData.');
                return response.json(error);
              }

              console.log(`Данные таблицы ${currentTable} обновлены.`);
              response.json(result);
            });
          }
        }
      });

    } else {

      console.log(`Запись в таблицу ${currentTable} добавлена.`);

      Table.takeAllData((error, result) => {
        if (error) { 
          console.log('Проблемы с соединением к БД при обработке /table/insert. function insertData->takeAllData.');
          return response.json(error);
        }

        console.log(`Данные таблицы ${currentTable} обновлены.`);
        response.json(result);
      });
    }

  });
}

function transition (request, response) {
  if(!request.body) return response.sendStatus(400);

  currentTable = request.body.currentTable;
  
  Table.takeAllData((error, result) => {
    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /table. function transition->takeAllData.');
      return response.json(error);
    }

    response.json(result);
  });

}

function printData (request, response) {

  if(!request.body) return response.sendStatus(400);

  var printId = request.body.printId;

  Table.selectOperation(printId, (error, result) => {

    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /table/print. function printData->selectOperation');
      return response.json(error);
    }

    var report = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br><br>"
    report += "= = = = = = = = = = = = = = = = = = = = = = = = = = = = = =<br><br>";
    report += `Квитанция N ${printId}<br>`;

    report += `Банк получателя: Отделение Госбанка SQL №${result[0].nomer_otdeleniye}, г.${result[0].gorod_otdeleniye}<br>`;
    report += `Транзитный счет: ${result[0].tranzitnyy_schet}<br>`;
    report += `Дата осуществления кассовой операции: ${result[0].data_operatsii}<br>`;
    report += `Плательщик: ${result[0].fio_kliyent}<br>`;
    report += `Телефон плательщика: +${result[0].telefon_kliyent}<br><br>`;
    report += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br><br>";
    
    var firstResults = result[0];

    Table.selectServices(printId, (error, result) => {
      if (error) { 
        console.log('Проблемы с соединением к БД при обработке /table/print. function printData->selectServices');
        return response.json(error);
      }

      for (var i = 0; i < result.length; i++) {

        report += `Получатель: ${result[i].name_postavshchik}<br>`;
        report += `Наименование услуги: ${result[i].name_uslugi}<br>`;
        report += `Расчетный счет: ${result[i].raschetnyy_schet}<br>`;
        report += `Сумма: ${result[i].ctoimoct_uslugi}<br>`;
        report += `Назначение: ${firstResults.adres_kliyent}<br><br>`;
        report += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br>";
      }

      report += `Всего платежей: ${result.length} шт.<br>`;

      Table.getSumServices(printId, (error, result) => {
        if (error) { 
          console.log('Проблемы с соединением к БД при обработке /table/print. function printData->getSumServices');
          return response.json(error);
        }

        
        report += `На сумму: ${result[0].sum}.00 руб.<br>`;
        report += `Подтверждаю свое согласие на обработку персональных данных<br>`;
        report += `Подпись плательщика ___________ Подпись банка __________<br>`;
        report += `${firstResults.name_dolzhnoct}: ${firstResults.fio_sotrudnik.split(" ")[0]} <br>`;
        report += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<br><br>";

        response.json(report);
      });
      
    });
    
  });

}

function sortData (request, response) {

  if(!request.body) return response.sendStatus(400);

  Table.getSortData((error, result) => {
    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /table/sort. function sortData->getSortData.');
      return response.json(error);
    }
    
    response.json(result);
  });

}

function sortDescData (request, response) {

  if(!request.body) return response.sendStatus(400);

  Table.getSortDescData((error, result) => {
    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /table/sortDesc. function sortDescData->getSortDescData.');
      return response.json(error);
    }
    
    response.json(result);
  });

}