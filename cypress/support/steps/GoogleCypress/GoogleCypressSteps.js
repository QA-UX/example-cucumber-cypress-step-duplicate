/// <reference types="Cypress"/>
/* global Cypress, cy, expect, Given, When, Then */
import GoogleCypressObjects from '../../pageObjects/GoogleCypress/GoogleCypressObjects';

const googleCypressObjects = new GoogleCypressObjects();

Given('que o usuário esteja no site google', () => {
  googleCypressObjects.acessarGoogle();
});
When('entrar com {string}', texto => {
  googleCypressObjects.inputTexto(texto);
});
And('apertar enter', () => {
  googleCypressObjects.clickEnter();
});
Then('deve visualizar a busca correspondida', () => {
  googleCypressObjects.buscaCorrespondida();
});
