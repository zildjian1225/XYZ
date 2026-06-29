const express = require('express');
const cors = require('cors');
const path = require('path');
const bugRouter = require('../routes/bug');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/bug', bugRouter);

app.get('/api/status', (req, res) => {
  res.json({
    status: '💀 BUG XYZ ACTIVE',
    features: ['CRASH', 'DELAY', 'BAND', 'UI_BLANK', 'FORCLOSE'],
    version: '3.0.0'
  });
});

module.exports = app;
