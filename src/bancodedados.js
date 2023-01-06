const bancoDeDados = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo:'APIs',
            discricao:'Aulas de APIs Rest'
        },
    ],
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'guido@email.com',
            status: true
        },
        {
            id: 2,
            nome: 'Dani',
            email: 'dani@email.com',
            status: true
        }
    ]
}

module.exports = bancoDeDados;