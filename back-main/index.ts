import 'reflect-metadata';
const express = require('express');
const app = express();
const cors = require('cors');

import * as StoreController from './src/api/StoreController';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/store', StoreController.save);
app.get('/store', StoreController.getAll);

app.listen(3000, () => {
  console.log('Working Port 3000');
});
