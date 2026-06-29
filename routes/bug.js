const express = require('express');
const router = express.Router();
const { crashEngine } = require('../utils/crash-engine');
const { delayFactory } = require('../utils/delay-factory');
const { bandGenerator } = require('../utils/band-generator');
const { uiBlanker } = require('../utils/ui-blanker');

router.post('/crash', (req, res) => {
  const { target, intensity } = req.body;
  const result = crashEngine(target, intensity || 'MAX');
  res.json({ success: true, result });
});

router.post('/delay', (req, res) => {
  const { target, ms } = req.body;
  const result = delayFactory(target, ms || 99999);
  res.json({ success: true, result });
});

router.post('/band', (req, res) => {
  const { target, size } = req.body;
  const result = bandGenerator(target, size || '1TB');
  res.json({ success: true, result });
});

router.post('/ui-blank', (req, res) => {
  const { target } = req.body;
  const result = uiBlanker(target);
  res.json({ success: true, result });
});

router.post('/all', (req, res) => {
  const { target } = req.body;
  res.json({
    success: true,
    crash: crashEngine(target, 'MAX'),
    delay: delayFactory(target, 99999),
    band: bandGenerator(target, '1TB'),
    ui_blank: uiBlanker(target)
  });
});

module.exports = router;
