module.exports = {
  searchCurrent: searchCurrent,
  searchNext: searchNext,
  searchPrev: searchPrev,
  changeSum: changeSum
}

function searchCurrent(request, response) {

  if(!request.body) return response.sendStatus(400);

  var searchId = request.body.searchId;
  var nameId = request.body.nameId;

  if (searchId == 0) {
    return response.json([]);
  }

  if ((currentTable == 'operatsii') && (+searchId >= 10000000)) {
    
    return searchOperatsiiString();
  }

  if (+searchId != +searchId) {
    
    return searchString();
  }

  connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = ${searchId};`, function(err, result) {
    if (!!err) { 
      console.log('Проблемы с соединением к БД при обработке /search');
      return response.json(error);
    }

    if (request.body.listUslugi) {
    
      var firstResults = result;

      connection.query(`SELECT id_uslugi FROM uslugi,operatsii,operatsii_has_uslugi WHERE operatsii.id_operatsii=operatsii_has_uslugi.kod_operatsii AND uslugi.id_uslugi=operatsii_has_uslugi.kod_uslugi AND id_operatsii=${searchId};`, function(err, result) {
        if (!!err) { 
          console.log('Проблемы с соединением к БД при обработке /search');
          return response.json(error);
        }

        var choose_uslugi ='';

        for (var i = 0; i < result.length; i++) {
          choose_uslugi += result[i].id_uslugi;

          if (i != (result.length - 1)) {
            choose_uslugi += ',';
          }
        }
        firstResults[0].choose_uslugi = choose_uslugi;
        
        response.json(firstResults);
      });
    } else response.json(result);
    
  });

  function searchOperatsiiString() {

    let {fieldFirstName, fieldSecondName} = getFieldName();

    connection.query(`SELECT * FROM ${currentTable} WHERE ${fieldFirstName} LIKE '%${searchId}%' OR ${fieldSecondName} LIKE '%${searchId}%';`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при обработке /search searchString()');
        return response.json(error);
      }

      var firstResultsOperatsii = result;
      var searchIdOperatsii = result[0].id_operatsii;

      connection.query(`SELECT id_uslugi FROM uslugi,operatsii,operatsii_has_uslugi WHERE operatsii.id_operatsii=operatsii_has_uslugi.kod_operatsii AND uslugi.id_uslugi=operatsii_has_uslugi.kod_uslugi AND id_operatsii=${searchIdOperatsii};`, function(err, result) {
        if (!!err) { 
          console.log('Проблемы с соединением к БД при обработке /search');
          return response.json(error);
        }

        var choose_uslugi ='';

        for (var i = 0; i < result.length; i++) {
          choose_uslugi += result[i].id_uslugi;

          if (i != (result.length - 1)) {
            choose_uslugi += ',';
          }
        }

        firstResultsOperatsii[0].choose_uslugi = choose_uslugi;
        
        response.json(firstResultsOperatsii);
      });

      //response.json(result);
    });

  }

  function searchString() {

    let {fieldFirstName, fieldSecondName} = getFieldName();

    connection.query(`SELECT * FROM ${currentTable} WHERE ${fieldFirstName} LIKE '%${searchId}%' OR ${fieldSecondName} LIKE '%${searchId}%';`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при обработке /search searchString()');
        return response.json(error);
      }

      response.json(result);
    });

  }

}

function searchNext(request, response) {
  if(!request.body) return response.sendStatus(400);

  var searchId = request.body.searchId;
  var nameId = request.body.nameId;

  connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = (SELECT MAX(${nameId}) FROM ${currentTable} ORDER BY ${nameId});`, function(err, result) {
    if (!!err) { 
      console.log('Проблемы с соединением к БД при обработке /searchPrev in if');
      return response.json(error);
    }

    lastId = result[0][`${nameId}`];

    if (searchId > lastId) {

      return response.json([]);
    } else {

      connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = ${searchId};`, function(err, result) {
        if (!!err) { 
          console.log('Проблемы с соединением к БД при обработке /searchPrev');
          return response.json(error);
        }

        if (!result.length) {
          searchId--;

          connection.query(`SELECT * FROM ${currentTable}`, function(err, result) {
            if (!!err) { 
              console.log('Проблемы с соединением к БД при обработке /searchPrev');
              return response.json(error);
            }

            for (var i = 0; i < result.length; i++) {
              if (result[i][`${nameId}`] == `${searchId}`) {
                
                if (result[i+1] === undefined) {
                  
                  var nextString = 0;
                  return response.json([]);
                } else { 
                  
                  var nextString = result[i+1];

                  if (currentTable == 'operatsii') {

                    addServicesAsString(nextString, (error, result) => {
                      response.json(result);
                    });
                  } else {
      
                    return response.json([result[i+1]]);
                  }
                }
              }
            }

            return response.json([result[0]]);
          });
          
        } else {

          if (currentTable == 'operatsii') {
            addServicesAsString(result, (error, result) => {
              response.json(result);
            });
            
          } else response.json(result);
        }
        
      });
    }
  });

}

function searchPrev(request, response) {
  if(!request.body) return response.sendStatus(400);

  var searchId = request.body.searchId;
  var nameId = request.body.nameId;

  if (searchId < 0) {

    connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = (SELECT MAX(${nameId}) FROM ${currentTable} ORDER BY ${nameId});`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при обработке /searchPrev in if');
        return response.json(error);
      }

      if (currentTable == 'operatsii') {
        searchId = result[0].id_operatsii;

        addServicesAsString(result, (error, result) => {
          response.json(result);
        });
      } else return response.json(result);
      
      //response.json(result);
    });
  } else if (searchId == 0) {

    response.json([]);
  } else {

    connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = ${searchId};`, function(err, result) {
      if (!!err) { 
        console.log('Проблемы с соединением к БД при обработке /searchPrev');
        return response.json(error);
      }

      if (!result.length) {
        searchId++;

        connection.query(`SELECT * FROM ${currentTable}`, function(err, result) {
          if (!!err) { 
            console.log('Проблемы с соединением к БД при обработке /searchPrev');
            return response.json(error);
          }

          for (var i = 0; i < result.length; i++) {
            if (result[i][`${nameId}`] == `${searchId}`) {

              if (result[i-1] === undefined) var prevString = 0;
              else var prevString = result[i-1][`${nameId}`];
              
              break;
            }
          }

          if (!prevString) {
            
            return response.json([]);
          } 
            
          connection.query(`SELECT * FROM ${currentTable} WHERE ${nameId} = ${prevString};`, function(err, result) {
            if (!!err) { 
              console.log('Проблемы с соединением к БД при обработке /searchPrev');
              return response.json(error);
            }

            if (currentTable == 'operatsii') {
              searchId = prevString;
              addServicesAsString(result, (error, result) => {
                response.json(result);
              });
            } else return response.json(result);
            
            //response.json(result);
          });
          
          return;
        });
        
        return;
      }

      if (currentTable == 'operatsii') {
        addServicesAsString(result, (error, result) => {
          response.json(result);
        });
      } else return response.json(result);
      //response.json(result);
    });
  }

}

function changeSum(request, response) {
  if(!request.body) return response.sendStatus(400);

  var searchFields = request.body.fieldCalcSum.split(',');

  var sum = 0;
  var i = 0;

  sumServices(i, sum, searchFields, (error, result) => {
    response.json([result]);
  });

}

// Вспомогательные функции =============================================================================
function getFieldName() {
  let fieldFirstName;
  let fieldSecondName;

  switch(currentTable) {
    case 'kliyent':
      fieldFirstName = 'fio_kliyent';
      fieldSecondName = 'passport_kliyent';
      break;
    case 'sotrudnik':
      fieldFirstName = 'fio_sotrudnik';
      fieldSecondName = 'passport_sotrudnik';
      break;
    case 'uslugi':
      fieldFirstName = 'name_uslugi';
      fieldSecondName = 'ctoimoct_uslugi';
      break;
    case 'operatsii':
      fieldFirstName = 'kod_kliyent';
      fieldSecondName = 'kod_sotrudnik';
      break;
    case 'otdeleniye':
      fieldFirstName = 'gorod_otdeleniye';
      fieldSecondName = 'ulitsa_otdeleniye';
      break;
    case 'postavshchik':
      fieldFirstName = 'name_postavshchik';
      fieldSecondName = 'adres_postavshchik';
      break;
  }

  return {
    'fieldFirstName': fieldFirstName,
    'fieldSecondName': fieldSecondName
  }
}

function addServicesAsString(rowOperation, callback) {
  
  connection.query(`SELECT id_uslugi FROM uslugi,operatsii,operatsii_has_uslugi WHERE operatsii.id_operatsii=operatsii_has_uslugi.kod_operatsii AND uslugi.id_uslugi=operatsii_has_uslugi.kod_uslugi AND id_operatsii=${rowOperation[0].id_operatsii};`, function(error, result) {
    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /search');
      callback(error);
    }

    var choose_uslugi ='';

    for (var i = 0; i < result.length; i++) {
      choose_uslugi += result[i].id_uslugi;

      if (i != (result.length - 1)) {
        choose_uslugi += ',';
      }
    }
    rowOperation[0].choose_uslugi = choose_uslugi;
    
    callback(error, rowOperation);
  });
}

function sumServices(i, sum, searchFields, callback) {
  connection.query(`SELECT SUM(ctoimoct_uslugi) AS fieldSum FROM uslugi WHERE id_uslugi = ${searchFields[i]};`, function(error, result) {
    if (error) { 
      console.log('Проблемы с соединением к БД при обработке /search');
      return callback(error);
    }

    sum += +result[0]['fieldSum'];

    i++;
    if (i < searchFields.length) {
      sumServices(i, sum, searchFields, callback);
    } else {
      callback(error, sum);
    }

  });
}
