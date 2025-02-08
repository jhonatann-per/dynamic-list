const { v4: uuidv4 } = require('uuid');

let tarefas = [];


// Criar uma nova tarefa
exports.createTask = (req, res) => {
    const { titulo, descricao, status } = req.body;

    // Validação dos campos obrigatórios
    if (!titulo || !descricao || !status) {
        return res.status(400).json({
            erro: true,
            mensagem: "Todos os campos são obrigatórios!"
        });
    }

    // Validação do status
    const statusPermitidos = ["Pendente", "Em andamento", "Feito"];
    if (!statusPermitidos.includes(status)) {
        return res.status(400).json({
            erro: true,
            mensagem: "Status inválido! Os valores permitidos são: Pendente, Em andamento, Feito."
        });
    }

    // Cria a nova tarefa
    const novaTarefa = {
        id: uuidv4(),
        titulo,
        descricao,
        status
    };

    tarefas.push(novaTarefa);

    return res.status(201).json({
        erro: false,
        mensagem: "Tarefa criada com sucesso",
        tarefa: novaTarefa
    });
};

// Edita a Tarefa
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    const tarefa = tarefas.find(tarefa => tarefa.id === id);

    if(!tarefa) {
        return res.status(404).json({
            erro: true,
            mensagem: 'Tarefa não encontrada!'
        })
    }

    if(tarefa) tarefa.titulo = titulo;
    if(descricao) tarefa.descricao = descricao;
    if(status) tarefa.status = status;

    return res.status(200).json({
        erro: false,
        mensagem: 'Tarefa editada com sucesso!'
    });

};

// Listar todas as Tarefas
exports.listTasks = (req, res) => {
    return res.status(200).json({
        erro: false,
        mensagem: "Tarefas listadas com sucesso!",
        tarefas,
    })
};

// Deletar uma tarefa
exports.deleteTask = (req, res) => {
    const { id } = req.params;

    const tarefa = tarefas.find(tarefa => tarefa.id === id);

    if(!tarefa) {
        return res.status(404).json({
            erro: true,
            mensagem: "Tarefa não encontrada!"
        })
    }

    tarefas = tarefas.filter(t => t.id !== id);

    return res.status(200).json({
        erro: false,
        mensagem: "Tarefa deletada com sucesso!",
        tarefa,
    })


};