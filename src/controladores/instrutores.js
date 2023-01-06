let { instrutores } = require('../bancodedados');
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

const editarInstrutor = (req, res) => {
    const { id } = req.params;
    const {nome, email, status} = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: 'nome é obrigatorio.'});
    }
    if (!email) {
        return res.status(400).json({mensagem: 'email é obrigatorio.'});
    }
    if (!status) {
        return res.status(400).json({mensagem: 'status é obrigatorio.'});
    }
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json('instrutor nao encontrado');
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
}

const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const {status} = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json('instrutor nao encontrado');
    }

    instrutor.status = status;

    return res.status(204).send();
}

const excluirInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({mensagem: 'instrutor nao encontrado'});
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });

    return res.status(204).send();
}


module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    editarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor,
}