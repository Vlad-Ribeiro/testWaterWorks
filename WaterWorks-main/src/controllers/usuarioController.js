var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);
          res.json({
            idUSER: resultadoAutenticar[0].id,
            email: resultadoAutenticar[0].email,
            nome: resultadoAutenticar[0].nome,
            senha: resultadoAutenticar[0].senha,
            empNome: resultadoAutenticar[0].empNome,
            fkEmpresa: resultadoAutenticar[0].empresaId,
          });
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var cargo = req.body.cargoServer;
  var fkEmpresa = req.body.idEmpresaVincularServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (cargo == undefined) {
    res.status(400).send("Seu cargo está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (fkEmpresa == undefined) {
    res.status(400).send("Sua empresa a vincular está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha, cargo, fkEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function plotar(req, res) {
  var idPLANTACAO = req.body.idPLANTACAO;

  if (idPLANTACAO == undefined) {
    res.status(400).send("Algum parametro está undefined!");
  } else {
    usuarioModel
      .plotar(idPLANTACAO)
      .then(function (resultado) {
        res.json(resultado);
        res.status(200);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nErro plotar 1 ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function plotar7(req, res) {
  var idPLANTACAO = req.body.idPLANTACAO;

  if (idPLANTACAO == undefined) {
    res.status(400).send("Algum parametro está undefined!");
  } else {
    usuarioModel
      .plotar7(idPLANTACAO)
      .then(function (resultado) {
        res.json(resultado);
        res.status(200);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nErro plotar 7 ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function plotar2(req,res) {
  usuarioModel
    .plotar2()
    .then(function (resultado) {
      res.json(resultado);

      res.status(200).json(resultado); // Define o status antes de enviar o JSON
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nErro plotar 2 ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function plotar4(req,res) {
  usuarioModel
    .plotar4()
    .then(function (resultado) {
      res.json(resultado);

      res.status(200).json(resultado); // Define o status antes de enviar o JSON
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nErro plotar 4 ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}



function alertar_umi(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var umidade = req.body.umiServer;
  var fkEmpresa = req.body.idEmpresaVincularServer;

  // Faça as validações dos valores
  if (umidade == undefined) {
    res.status(400).send("umidade está undefined!");
  } else if (fkEmpresa == undefined) {
    res.status(400).send("Sua empresa a vincular está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .alertar_umi(umidade, fkEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function alertar_desumi(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var umidade = req.body.umiServer;
  var fkEmpresa = req.body.idEmpresaVincularServer;

  // Faça as validações dos valores
  if (umidade == undefined) {
    res.status(400).send("umidade está undefined!");
  } else if (fkEmpresa == undefined) {
    res.status(400).send("Sua empresa a vincular está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .alertar_desumi(umidade, fkEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar,
  plotar,
  plotar7,
  plotar4,
  plotar2,
  alertar_umi,
  alertar_desumi,
};
