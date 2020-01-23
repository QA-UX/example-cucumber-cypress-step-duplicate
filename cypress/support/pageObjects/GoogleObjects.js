/// <reference types="Cypress" />
import GoogleElements from '../elements/GoogleElements';

const googleElements = new GoogleElements();

class GoogleObjects {

  acessarGoogle() {
    cy.visit('https://www.google.com.br/');
  }

  inputTexto(texto) {
    cy.get(googleElements.inputTexto()).type(texto);
  }
  
  clickEnter() {
    cy.get(googleElements.inputTexto()).type('{enter}')
  }

  buscaCorrespondida() {
    cy.get(googleElements.linkGoogleContais()).should('contain','cypress-cucumber-preprocessor - npm');
  }
}

export default GoogleObjects;