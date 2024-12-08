var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
  usuarioController.autenticar(req, res);
});

router.post("/plotar", function (req, res) {
  usuarioController.plotar(req, res);
});

router.post("/plotar7", function (req, res) {
  usuarioController.plotar7(req, res);
});


router.post("/plotar4", function (req, res) {
  usuarioController.plotar4(req, res);
});

router.post("/plotar2", function (req, res) {
  usuarioController.plotar2(req, res);
});

router.post("/alertar_umi", function (req, res) {
  usuarioController.alertar_umi(req, res);
});

router.post("/alertar_desumi", function (req, res) {
  usuarioController.alertar_desumi(req, res);
});

module.exports = router;
