const express = require("express")
const router = express.Router()
const controller =  require("../controllers/listaTarefasController")

router.get("/", controller.get);//para pegar todos os elementos de todos objetos
router.get("/tarefas", controller.get);//para pegar todos os elementos de todos objetos
router.get("/:id", controller.getById);//para pegar os elementos pelo id dele

module.exports = router;