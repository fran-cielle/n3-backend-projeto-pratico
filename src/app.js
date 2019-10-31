const express = require("express");
const app = express();//instancia todas as ferramentas do express

//roteamento das rotas 

const index = require("./routes/index"); 
//requisitar o caminho de tarefas
const tarefas = require("./routes/listaTarefasRoutes"); 


app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header(//header - "etiquetas" que irão validar e guardar informações 
        "Access-Control-Allow-Header",
        "Origin, X-Request-With, Content-Type, Accept"
    )
    next();
});

app.use("/",index);//toda vez que eu acessar a rota / (barra) é para acessar(instanciar) a const index 
app.use("/tarefas",tarefas);

module.exports = app; //para exportar o arquivo, assim irei conseguir requisitar coisas que existem dentro dela em toda a aplicação

