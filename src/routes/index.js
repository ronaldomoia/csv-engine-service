const readCsvController = require('../controller/readCsvController')();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: '/csv-engine-service'});

app.post('/process-csv', upload.single('file'), (request, response) => {
  try {
    const payload = readCsvController.execute(request.file.path);
    return response.status(200).json(payload); 
  } catch(err) {
    console.log(err.message)
    return response.status(400);
  }
});

module.exports = app;