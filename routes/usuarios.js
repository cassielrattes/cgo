const express = require('express');
const jwt = require('jsonwebtoken');
const BancoUtils = require('../helpers/bancoUtils');
const Usuario = require('../models/usuario');
const UsuarioDAO = require('../models/usuarioDAO');
const Utils = require('../helpers/utils');
const segredo = "AluninhoFeliz";
const routers = express.Router();



routers.post('/auth', (req, res) => {
    const usuario = new Usuario(req.body);
    usuario.setarSenha(req.body.senha);
    new UsuarioDAO().buscarPorUsuarioESenha(usuario, (resposta) => {

        if (resposta.length > 0) {
            const token = jwt.sign({
                id: Utils.criptografa('' + resposta[0].id),
                nome: resposta[0].nome,
                tipo: resposta[0].tipo
            }, segredo, {
                expiresIn: '1h'
            });
            res.cookie('token', token).redirect('/viewpanel');
            //res.json(token);
        } else {
            res.status(301).redirect('/');
        }
    });

})

routers.get('/', (req, res) => {
    BancoUtils.select(Usuario.tabela, (usuarios) => {
        res.json(usuarios);
    })

});

routers.post('/', (req, res) => {
    const usuario = new Usuario(req.body);
    usuario.senha = usuario.senha || "anjinho";
    usuario.setarSenha(usuario.senha);
    BancoUtils.insert(usuario, Usuario.tabela, (r) => {
        res.json(r);
    });
})

routers.put('/', (req, res) => {
    const usuarioNovo = new Usuario(req.body);
    BancoUtils.put(usuarioNovo, Usuario.tabela, {
        key: 'rm',
        value: usuarioNovo.rm
    }, (r) => {
        res.json(r);
    });
})

routers.delete('/:rm', (req, res) => {
    BancoUtils.delete(Usuario.tabela, {
        key: 'rm',
        value: req.params.rm
    }, (r) => {
        res.json(r);
    });
})


module.exports = routers;