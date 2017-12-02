# reactBlerBus
Front made with react
Funcionamento:
  - Back :
    A pasta react-backend foi gerada com o auxilio do express-generator, que gera um backend do express automaticamente. As principais declarações do nosso antigo server estão no app.js, enquanto que as Gets e Posts estão dentro da pasta routes, fica um pouco mais facil de visualizar ao inves de declarar routers dentro de um arquivo apenas.
   - Front:
    A pasta blerbus é onde se localiza o front do React.
Observações:
  Temos duas coisas rodando ai dentro: 
    - Dentro da react-backend, se rodarem npm start, verão que nosso servidor começara a rodar no link http://localhost:3001, printando na sua tela Welcome to Express. Deixem este servidor rodando.
    - Dentro da pasta blerbus, se derem npm start, verão que nosso front em react começara a rodar, aparecendo no seu browser a pagina de login. 
    - Os dois conversam através da tag proxy localizada dentro do package-json da pasta blerbus, podem ver que a porta nesta tag corresponde a 3001, porta do express.
