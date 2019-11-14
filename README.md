# n3-backend-projeto-pratico
Objetivo projeto
Exibir via API uma listagem de tarefas, com rotas para listagem por ID, nome colaborador e por data de início do projeto.

### Tecnologias usadas
Para desenvolver o projeto utilizei a tecnologia Node JS.Para o download dos pacotes utilizei o NPM, porém você poderá usar o gerenciador de pacotes de sua preferência.

### Instalação
Para clonar este repositório você deverá acessar o git bash (Windows) ou terminal (Linux, MAC) e digitar o seguinte comando:
#markdown
- git clone https://github.com/fran-cielle/n3-backend-projeto-pratico.git
-Após clonar o repositório e acessar o novo diretório criado, você deverá iniciar o node pelo seguinte comando (caso utilize o NPM)

#markdom
- npm install 
- Se você está utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.

### Endpoints utilizados
Os endpoints criados foram os seguintes:

GET /:id => Exibe os dados de acordo com o ID inserido

GET / => Exibe todas as tarefas incluídas

GET tarefas/concluidos/filtrar => Exibe apenas as tarefas concluídas

GET tarefas//nomes/:nomeColaborador => Exibe apenas os dados do nome filtrado

GET tarefas/dataInclusao => Ordena a exibição de acordo com as datas mais recentes

GET tarefas/concluidos/tempo => Exibe a duração em dias da tarefa caso a mesma tenha sido concluída
