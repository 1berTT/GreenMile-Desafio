<h1 align="left"> Realizando assertivas em eventos de Long Click com Cypress </h1>

<p align="justify"> 
  Este repositório contém a resolução do desafio proposto pela empresa GrennMile, como parte do processo seletivo para a vaga de estagiário. O objetivo do desafio é examinar a página que se encontra neste <a href="https://codepen.io/choskim/pen/RLYebL"> Link. </a> A aplicação é composta basicamente por um quadrado verde, e é nele em que o problema se encontra. A proposta do desafio é clicar no quadrado por ao menos 500 milisegundos, fazendo com suas dimensões aumentem. Para a realização do testes, foi usado o Framework de automação de testes Cypress, que será responsável por verificar se o quadrado teve suas dimensões realmente alteradas.
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
  Após fazer o download do projeto, é necessario fazer o download do Cypress, para que vc possa executar os seus testes. Para instala-lo, basta abrir o terminal novamente e inserir o seguinte comando (Recomendo que usem exatamente este comando, devido ao fato de o projeto ter sido implementado nesta versão específica do Cypress):
</p>

` npm install cypress@3.6.0 `

<h2 align="left"> Executando o projeto </h2>
<p>
  Após a realização das etapas anteriores, você já pode dar inicio a execução dos testes. Para isso, basta abrir o terminal na pasta do seu projeto e inserir o seguinte comando:
</p>

` npm run cypress:open `

<h2 align="left"> Dificuldades encontradas </h2>

<p>
  O evento de Long Click da aplicação é feito através do uso da biblioteca hammer.js. O problema é que a biblioteca não consegue reconhecer a ação de clique do Cypress, por não se tratar de um evento nativo, fazendo com que o evento de clique não seja acionado, e que as dimensões do quadrado não sofram alterações. Para tratar esse problema, optei por retirar a biblioteca hammer.js, e tratar o evento de Long Click usando apenas JavaScript. Com isso, Os eventos do Cypress passam a ser reconhecidos pela aplicação, tornando possível a validação do evento de clique.
</p>

<h2 align="left"> Compreendendo o arquivo de testes </h2>

<p>
  Os primeiros trechos do código correspondem a etapa de visitar a plicação (que ocorre no before), e a parte de recarregamento da página, que ocorrem antes do início de um bloco de testes (beforeEach é responsável por executar essa ação).
</p>

```
before(() => {
    cy.visit('./src/index.html'); // visita a pagina que será testada
})
beforeEach(() => {
    cy.reload(); // recarrega a pagina a cada execução de um novo teste
})
```

<p>
  O primeiro bloco de teste, faz primeiramente a verificação inicial acerca das dimensões do quadrado (que inicialmente é 90px por 90px). Após isso ocorre o evento de clique, para que as dimensões do quadrado mudem. Por fim, ocorre a validação das dimensões do quadrado, que devem ter sido alteradas para 225px por 225px.
</p>

```
it('Primeira assertiva, que testa se o quadrado vai de 90px a 225px', () => { // Teste que verifica a primeira questão do desafio
    cy.get('#quadrado').should('have.css', 'width', '90px'); // verifica se o elemento .sqare possui a classe css width = 90px
    cy.get('.square').should('have.css', 'height', '90px'); // verifica se o elemento .square possui a classe css height = 90px
    // É possivel selecionar o elemento tanto pela sua classe, quanto pelo seu id (#quadrado / .square).

    cy.get('.square').trigger("mousedown", {which: 1}); // realizando o evento de long click (mousedown) com o elemento .square
    cy.wait(1000); // espera 1 segundo para que a execução do teste continue (Para que seja possível ver o quadrado mundando de tamanho de uma maneira mais normal)

    cy.get('#quadrado').should('have.css', 'width', '225px');
    cy.get('.square').should('have.css', 'height', '225px');
})
```

<p>
  Após a execução do primeiro teste, você deverá obter o seguinte resultado:
</p>

![alt text](https://github.com/1berTT/GreenMile-Desafio/blob/master/resultado1.PNG)

<p>
  Já o segundo e ultimo bloco de teste, tem como objetivo realizar a validação de quando o quadrado tem o seu tamanho alterado de 225px por 225px para 90px por 90px
</p>

```
it('Segunda assertiva, que testa se o quadrado vai de 225px a 90px', () => { //Teste que verifica a segunda questão do desafio
    cy.get('.square').trigger("mousedown", {which: 1});
    cy.wait(1000);

    cy.get('#quadrado').should('have.css', 'width', '225px');
    cy.get('.square').should('have.css', 'height', '225px');

    cy.get('.square').trigger("mousedown", {which: 1});
    cy.wait(1000);

    cy.get('#quadrado').should('have.css', 'width', '90px');
    cy.get('.square').should('have.css', 'height', '90px');
})
```

<p>
  Após a execução do ultimo bloco de teste, você deverá obter o seguinte resultado:
</p>

![alt text](https://github.com/1berTT/GreenMile-Desafio/blob/master/resultado.PNG)

<h2 align="left"> Autor do projeto </h2>
<p>
  <b>
    <a href="https://www.github.com/1berTT"> Humberto Cavalcante Damasceno. </a>
  </b>
</p>
