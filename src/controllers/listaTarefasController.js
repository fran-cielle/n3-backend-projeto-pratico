const tarefas = require("../model/listaControle.json");

exports.get = (req, res) =>{ 
       res.status(200).send(tarefas);
}

exports.getById = (req, res) => {
    const id = req.params.id;
    const tarefa = tarefas.find(tarefas => tarefas.id == id);
     res.status(200).send(tarefa);
}

exports.getConcluido = (req, res) =>{
    const concluidos = tarefas.filter(verificarConcluida=>{//Tarefas= é o json | concluidas = paramentro que vai fazer o filtro em cada item
        return verificarConcluida.concluido == "true";
    })
    res.status(200).send(concluidos)
}