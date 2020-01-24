/// <reference types="Cypress" />
import GoogleCypressCucumberElements from '../../elements/GoogleCypressCucumber/GoogleCypressCucumberElements';

const googleCypressCucumberElements = new GoogleCypressCucumberElements();

class GoogleCypressCucumberObjects {

  acessarGoogle() {
    cy.visit('https://www.google.com.br/');
  }

  inputTexto(texto) {
    cy.get(googleCypressCucumberElements.inputTexto()).type(texto);
  }
  
  clickEnter() {
    cy.get(googleCypressCucumberElements.inputTexto()).type('{enter}')
  }

  buscaCorrespondida() {
    cy.get(googleCypressCucumberElements.linkGoogleContais()).should('contain','cypress-cucumber-preprocessor - npm');
  }
}

export default GoogleCypressCucumberObjects;