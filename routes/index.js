// express web server
const routes = require('express').Router();
const lessonController = require('../controllers/lesson1');
const professionalController = require('../controllers/professionalController');


routes.get('/', lessonController.route);
routes.get('/ann', lessonController.ann);

routes.get('/professional', professionalController.getData);

module.exports = routes;