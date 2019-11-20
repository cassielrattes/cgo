const express = require('express');
const jwt = require('jsonwebtoken');
// const path = require('path');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');
const UsuarioDAO = require('../models/usuarioDAO');
const Utils = require('../helpers/utils');
const segredo = "cgo2019";
const routers = express.Router();



routers.post('/auth', (req,res) => {
   const usuario = new Usuario(req.body);
   usuario.setarSenha(req.body.senha);
   new UsuarioDAO().buscarPorUsuarioESenha(usuario, (resposta) => {
    if(resposta.length > 0){
        const token = jwt.sign({ id: Utils.criptografa('' + resposta[0].id), usuario: resposta[0].usuario, senha: resposta[0].senha, nome: resposta[0].nome, tipo: resposta[0].tipo}, segredo, {expiresIn: '1h'});
        res.cookie('token', token).redirect('/views/admplanta');
        res.json(token);
    } else {       
        res.status(301).redirect('/views');
    }
  });
})

routers.get('/', (req,res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })
   
});

routers.post('/', (req,res) => {
    const usuario = new Usuario(req.body);
    usuario.senha = usuario.senha || "cgo2019";
    usuario.setarSenha(usuario.senha);
    BancoUtils.insert(usuario, Usuario.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req,res) => {
    const usuarioNovo = new Usuario(req.body);
    BancoUtils.put(usuarioNovo, Usuario.tabela, {key: 'id', value: usuarioNovo.id}, (r) => {
        res.json(r);
    });
})

routers.delete('/:id', (req,res) => {
    BancoUtils.delete(Usuario.tabela, {key: 'id', value: req.params.id}, (r) => {
        res.json(r);
    });
})



module.exports = routers;

