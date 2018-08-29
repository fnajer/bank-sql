
module.exports = {
  showUsers: showUsers,
  addUser: addUser,
  dropUser: dropUser,
  queryAdmin: queryAdmin
};

function showUsers(request, response) {

  if(!request.body) return response.sendStatus(400);

  connection.query(`SELECT * FROM users;`, function(err, result) {
    if (!!err) { 
      console.log('Проблемы с соединением к БД при выборке пользователей /addUser');
      return response.json(error);
    }
    
    response.json(result);
  });
}

function addUser(request, response) {

  if(!request.body) return response.sendStatus(400);

  let newName = request.body.newName;
  let newPassword = request.body.newPassword;

  
  connection.query(`CREATE USER '${newName}'@'localhost' IDENTIFIED BY '${newPassword}';`, function(err, result) {
    if (!!err) { 
      console.log('Такое имя пользователя уже существует. Обработка /addUser');
      
      return response.json(error);
    }
    
    connection.query(`GRANT CREATE, SELECT, INSERT, UPDATE ON * . * TO '${newName}'@'localhost';`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при выдаче грантов /addUser');
        return response.json(error);
      }
      
      connection.query(`FLUSH PRIVILEGES;`, function(err, result) {
        if (!!err) { 
          console.log('Проблемы с соединением к БД при сохранении изменений /addUser');
          return response.json(error);
        }
        
        connection.query(`INSERT INTO users VALUES(NULL, '${newName}', '${newPassword}');`, function(err, result) {
          if (!!err) { 
            console.log('Проблемы с соединением к БД при добавлении пользователя в базу /addUser');
            return response.json(error);
          }
          
          connection.query(`SELECT * FROM users;`, function(err, result) {
            if (!!err) { 
              console.log('Проблемы с соединением к БД при выборке пользователей /addUser');
              return response.json(error);
            }
            
            response.json(result);
          });
        });
      });
    });
  });

}

function dropUser(request, response) {

  if(!request.body) return response.sendStatus(400);

  let dropName = request.body.dropName;

  connection.query(`DROP USER '${dropName}'@'localhost';`, function(err, result) {
    if (!!err) { 
      console.error('Хм. Почему то не удаляется из общей БД пользователей. Скорей всего такого пользователя нет. Обработка /dropUser');
      
      return response.json(error);
    }
    
    connection.query(`DELETE FROM users WHERE name_users='${dropName}';`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при удалении пользователя из своей таблицы /dropUser');
        return response.json(error);
      }
      
      connection.query(`SELECT * FROM users;`, function(err, result) {
        if (!!err) { 
          console.log('Проблемы с соединением к БД при выборке пользователей /dropUser');
          return response.json(error);
        }
      
        response.json(result);
      });
    });
  });

}

function queryAdmin(request, response) {
  if(!request.body) return response.sendStatus(400);

  var queryAdmin = request.body.queryAdmin;

  connection.query(queryAdmin, function(err, result) {
    if (!!err) { 
      console.log('Проблемы с соединением к БД при вызове takeAllData()');
      return response.json(error);
    }
    
    response.json(result);
  });

}