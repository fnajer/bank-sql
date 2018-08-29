const express = require('express'),
  router = express.Router(),
  mainController = require('../controllers/main.controller'),
  userController = require('../controllers/user.controller'),
  tableController = require('../controllers/table.controller')
  sliderController = require('../controllers/slider.controller');

module.exports = router;

router.get('/', mainController.showEntry);
router.post('/entry', mainController.processEntry);

router.post('/users', userController.showUsers);
router.post('/users/add', userController.addUser);
router.post('/users/drop', userController.dropUser);
router.post('/users/queryAdmin', userController.queryAdmin);

router.post('/table/insert', tableController.insertData);
router.post('/table/drop', tableController.dropData);
router.post('/table/change', tableController.changeData);

router.post('/table/print', tableController.printData);
router.post('/table/sort', tableController.sortData);
router.post('/table/sortDesc', tableController.sortDescData);
router.post('/table', tableController.transition);

router.post('/search/current', sliderController.searchCurrent);
router.post('/search/next', sliderController.searchNext);
router.post('/search/prev', sliderController.searchPrev);
router.post('/changeSum', sliderController.changeSum);