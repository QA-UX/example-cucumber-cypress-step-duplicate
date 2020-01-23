/// <reference types="Cypress"/>
/* global Cypress, cy, expect, Given, When, Then */
import GoogleCypressCucumberObjects from '../pageObjects/GoogleCypressCucumberObjects';

const googleCypressCucumberObjects = new GoogleCypressCucumberObjects();

Given('que o usuário esteja no site google', () => {
  googleCypressCucumberObjects.acessarGoogle();
});
When('entrar com {string}', texto => {
  googleCypressCucumberObjects.inputTexto(texto);
});
And('apertar enter', () => {
  googleCypressCucumberObjects.clickEnter();
});
Then('deve visualizar a busca correspondida', () => {
  googleCypressCucumberObjects.buscaCorrespondida();
});
