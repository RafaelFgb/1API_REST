const { instrutores } = require('../bancodedados');
let { identificadorInstrutor } = require('../bancodedados');


const listarInstrutores = (req, res) => {
    return res.json(instrutores);
}

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json('instrutor nao encontrado');
    }

    return res.json(instrutor);
}

const cadastrarInstrutor = (req, res) => {
    const {nome, email, status} = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'nome é obrigatorio.'})
    }
    if (!email) {
        return res.status(400).json({mensagem: 'email é obrigatorio.'})
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome: nome,
        email: email,
        status: status ?? true
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}


module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor
}