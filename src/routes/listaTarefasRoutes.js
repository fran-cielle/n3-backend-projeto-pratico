const express = require("express")
const router = express.Router()
const controller =  require("../controllers/listaTarefasController")

router.get("/", controller.get);//para pegar todos os elementos de todos objetos
router.get("/tarefas", controller.get);
router.get("/concluidos",controller.getConcluido);
router.get("/dataInclusao", controller.ListarPorDt);
// || TODOS OS QUE POSSUEM PARAMS FICAM POR ULTIMO SE NÃO ELE TRAVA AS OUTRAS ROTAS 

router.get("/:id", controller.getById);//para pegar os elementos pelo id dele
router.get("/nomes/:nomeColaborador", controller.getByName);//a palavra seguida de : deve conter o mesmo nome do arquivo json


module.exports = router;