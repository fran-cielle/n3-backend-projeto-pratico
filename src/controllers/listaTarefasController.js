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
//Função que transforma string em data - CARCAÇA, pois essa função inicialmente não recebe nenhum 
function transfStringEmDt(data){//chamando função que pega o valor como string e transforma em data
  const dataSplit = data.split("/");// pega o valor e da um split com a / em cada data e remove a barrafil
  const dataOrdenada = dataSplit[1] +  '-' + dataSplit[0] +  '-' + dataSplit[2]; //o metodo do date recebe informações como mes [1] dia[2] e ano[3] e - entre elas
  const dataFormatada = new Date (dataOrdenada); 

  return dataFormatada;
}

//metodo que usa a função que transforma string em data 
exports.ListarPorDt = (req, res) =>{
   const data = tarefas.sort(function (a, b) {
    if (transfStringEmDt(a.dataInclusao) < transfStringEmDt(b.dataInclusao)) {
      return 1;
    }
    if (transfStringEmDt(a.dataInclusao > b.dataInclusao)) {
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
