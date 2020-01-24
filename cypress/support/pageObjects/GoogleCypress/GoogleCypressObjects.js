/// <reference types="Cypress" />
import GoogleCypressElements from '../../elements/GoogleCypress/GoogleCypressElements';

const googleCypressElements = new GoogleCypressElements();

class GoogleCypressObjects {

  acessarGoogle() {
    cy.visit('https://www.google.com.br/');
  }

  inputTexto(texto) {
    cy.get(googleCypressElements.inputTexto()).type(texto);
  }

  clickEnter() {
    cy.get(googleCypressElements.inputTexto()).type('{enter}')
  }

  buscaCorrespondida() {
    cy.get(googleCypressElements.linkGoogleContais()).should('contain', 'JavaScript End to End Testing Framework | cypress.io');
  }
}

export default GoogleCypressObjects;