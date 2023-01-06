let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const cadastrarAulas = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({mensagem: 'instrutor nao existe'});
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);
}

const listarAulas = (req, res) => {
    return res.json(aulas);
}

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({mensagem: 'aula nao existe'});
    }

    return res.json(aula);
}

const obterAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({mensagem: 'instrutor nao existe'});
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    return res.json(aulasEncontradas);
}
module.exports = {
    cadastrarAulas,
    listarAulas,
    obterAula,
    obterAulasInstrutor
}