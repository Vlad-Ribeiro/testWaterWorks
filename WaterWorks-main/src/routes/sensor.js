var express = require('express');
var router = express.Router();

var sensorController = require('../controllers/sensorController');

router.post("/graficoDiario", function(req, res){
    sensorController.graficoDiario(req, res);
})

router.post("/graficoMensal", function(req, res){
    sensorController.graficoMensal(req, res);
})

router.post("/umiMax", function(req, res){
    sensorController.umiMax(req, res);
})

router.post("/umiMin", function(req, res){
    sensorController.umiMin(req, res);
})

module.exports = router;