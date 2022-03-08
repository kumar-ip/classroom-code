/// <reference types="cypress" />

describe('My first cypress automation', () => {


    it('Open UIProgrammer', () => {
        cy.visit('http://www.uiprogrammer.com/');
        cy.get('#loginButton').should('be.visible');
        cy.get('a[href="contact.php"]').then(() => console.log(`Then method is called`));

    });


})