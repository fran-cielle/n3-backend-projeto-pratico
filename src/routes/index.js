const express = require("express");
const router = express.Router();//para instanciar apenas as funções/módulos de roteamento que estão dentro do express

router.get("/", function(req, res){
    res.status(200).send({ 
        title: "Projeto Reprograma",
        version: "0.0.1"
    })
})

module.exports = router;
