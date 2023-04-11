'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const error500 = require('./middleware/500');
const error404 = require('./middleware/404');

app.use(cors());
app.use(express.json());

app.use(userRouter);

app.use('*', error404);
app.use(error500);

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log(`Server up and listening on ${port}`);
  }),
};