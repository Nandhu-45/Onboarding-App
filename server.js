const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const xlsx = require('xlsx');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let data = [];

app.post('/submit', (req, res) => {
  data.push(req.body);
  res.send('Data received');

  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(data);

  xlsx.utils.book_append_sheet(wb, ws, 'OnboardingData');
  xlsx.writeFile(wb, 'OnboardingData.xlsx');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
