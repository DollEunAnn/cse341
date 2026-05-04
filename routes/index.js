// express web server
const routes = require('express').Router();
const lessonController = require('../controllers/lesson1');


routes.get('/', lessonController.route);
routes.get('/ann', lessonController.ann);

module.exports = routes;