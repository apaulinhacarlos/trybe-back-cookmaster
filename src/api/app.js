const express = require('express');
const { error } = require('../middleware');
const routes = require('../routes');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});

app.use('/', routes);

app.use(error);

module.exports = app;
