require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { FileRoutes } = require('./routes');
app.use('/api/files', FileRoutes);

app.get('/', (req, res) => {
  res.send('nttu api');
});

app.get('/api', (req, res) => {
  res.send('nttu api');
});

app.listen(port, () => {
  console.log('Server is running on port:', port);
});
