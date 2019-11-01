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



exports.ListarPorDt = (req, res) =>{
   const data = tarefas.sort(function (a, b) {
    if (a.dataInclusao > b.dataInclusao) {
      return 1;
    }
    if (a.dataInclusao < b.dataInclusao) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  res.status(200).send(data)
}

exports.getByName = (req, res) => {
    const name = req.params.nomeColaborador
    console.log(name);

    const pegarNome = tarefas.filter(verificarNome =>{
        return verificarNome.nomeColaborador == name; //pegar nome da pessoa que foi solicitada pelo params 
    })
     res.status(200).send(pegarNome);//enviar a const que armazenou o filtro da função
}
