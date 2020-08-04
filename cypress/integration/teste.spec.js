/// <reference types = "cypress" />

describe('Resolvendo o desafio proposto pela GreenMile', () => { // Bloco que contém os dois testes realizados
    before(() => {
        cy.visit('./src/index.html'); // visita a pagina que será testada
    })

    beforeEach(() => {
        cy.reload(); // recarrega a pagina a cada execução de um novo teste
    })

    it('Primeira assertiva, que testa se o quadrado vai de 90px a 225px', () => { // Teste que verifica a primeira questão do desafio
        cy.get('#quadrado').should('have.css', 'width', '90px'); // verifica se o elemento .sqare possui a classe css width = 90px
        cy.get('.square').should('have.css', 'height', '90px'); // verifica se o elemento .square possui a classe css height = 90px
        // É possivel selecionar o elemento tanto pela sua classe, quanto pelo seu id (#quadrado / .square).
        
        cy.get('.square').trigger("mousedown", {which: 1}); // realizando o evento de long click (mousedown) com o elemento .square
        cy.wait(1000); // espera 1 segundo para que a execução do teste continue (Para que seja possível ver o quadrado mundando de tamanho)

        cy.get('#quadrado').should('have.css', 'width', '225px');
        cy.get('.square').should('have.css', 'height', '225px');
    })


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
})