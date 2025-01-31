const { v4: uuidv4 } = require('uuid');

let tarefas = [];

exports.createTask = (req, res) => {
    const {titulo, descricao} = req.body;

    if(!titulo || !descricao){
        res.status(400).json({
            erro: true,
            mensagem: 'Todos os campos são obrigatórios!'
        });
    }

    const novaTarefa = {
        id: uuidv4(),
        titulo,
        descricao
    };

    tarefas.push(novaTarefa);

    return res.status(201).json({
        erro: false,
        mensagem: "Tarefa criada com sucesso",
        tarefas: novaTarefa
    });
};