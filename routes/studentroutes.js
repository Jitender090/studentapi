const routes = require('express').Router();

//Controllers
const studentController = require('../controller/studentcontroller.js');



routes.post('/students',studentController.stcontroller);
routes.get('/students',studentController.getstcontroller);
routes.delete('/students',studentController.deletestcontroller);
routes.put('/students/:sname',studentController.updatestcontroller);

module.exports = routes;