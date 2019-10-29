const express = require("express");
const app = express();//instancia todas as ferramentas do express

//roteamento das rotas 

const index = require("./routes/index"); //joga o caminho(./routes/index) dentro de uma variável(index)
//const professoras = require("./routes/professorasRoute");

//Middleware - para validar 

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");//permite a inda e vinda de todas as informações para todos 
    res.header(//header - "etiquetas" que irão validar e guardar informações 
        "Access-Control-Allow-Header",
        "Origin, X-Request-With, Content-Type, Accept"
    )
    next();
});