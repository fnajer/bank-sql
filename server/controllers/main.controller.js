const mysql = require('mysql'),
  Table = require('../models/table.js'),
  DbParams = require('../config/db-params.js');

module.exports = {
  showEntry: showEntry,
  processEntry: processEntry
};

// Показать форму входа. Можно не писать. Express видимо сам отдает по-умолчанию index.html файл с пути static
// Хотя, эта функция сработает, если файла index.html не будет в той папке. Поэтому оставим
function showEntry(request, response) {
  if(!request.body) {
    console.log('Error: function showEntry');
    return response.sendStatus(400);
  }

  response.render('index.html');
}

// Проверка формы входа
function processEntry(request, response) {
  if(!request.body) return response.sendStatus(400);

  params = new DbParams(request.body.userName,
                        request.body.userPassword);

  connection = mysql.createConnection(params.get());

  connection.connect((error) => {

    if (error) {
      console.log('Проблемы с соединением к БД при обработке /entry. function processEntry->connect.');
      return response.json(error);
    } 

    Table.takeAllData((error, result) => {
      if (error) { 
        console.log('Проблемы с соединением к БД при обработке /entry. function processEntry->takeAllData.');
        return response.json(error);
      }

      response.json(result);
    });
    
    
  });

}
