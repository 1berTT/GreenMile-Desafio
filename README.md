<h1 align="left"> Realizando assertivas em eventos de Long Click com Cypress </h1>

<p align="justify"> 
  Este repositório contém a resolução do desafio proposto pela empresa GrennMile, para a vaga de estagiário. O objetivo do desafio é examinar a página que se encontra neste <a href="https://codepen.io/choskim/pen/RLYebL"> Link. </a> A aplicação é composta basicamente por um quadrado verde, e é nele em que o problema se encontra. A proposta do desafio é clicar no quadrado por ao menos 500 milisegundos, fazendo com suas dimensões aumentem. Para a realização do testes, foi usado o Framework de automação de testes Cypress, que será responsável por verificar se o quadrado teve suas dimensões realmente alteradas.
</p>

<h2 align="left"> Preparação do ambiente </h2>

<p>
  Antes de fazer o download do projeto, é necessário fazer a instalação do npm. Um tutorial de como instala-lo está disponível neste <a href="https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329"> Link. </a>
</p>

<h2 align="left"> Instalação do projeto </h2>

<p>
  É possivel realizar o download do projeto através de duas formas: clonando o repositório ou fazendo o download do projeto em formato .zip. Para realizar a clonagem do repositório, basta abrir o terminal na pasta do seu projeto e digitar o seguinte comando:
</p>

` git clone https://github.com/1berTT/GreenMile-Desafio.git `

<h2 align="left"> Instalando o Cypress no seu projeto </h2>
<p>
  Após fazer o download do projeto, é necessario fazer o download do Cypress, para que vc possa executar os seus testes. Para instala-lo, basta abrir o terminal novamente e inserir o seguinte comando:
</p>

` npm install cypress@3.6.0 `

<h2 align="left"> Executando o projeto </h2>
<p>
  Após a realização das etapas anteriores, você jó pode dar inicio a execução dos testes. Para isso, basta abrir o terminal na pasta do seu projeto e inserir o seguinte comando:
</p>

` npm run cypress:open `
