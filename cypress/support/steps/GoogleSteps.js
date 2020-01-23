/// <reference types="Cypress"/>
/* global Cypress, cy, expect, Given, When, Then */
import GoogleObjects from '../pageObjects/GoogleObjects';

const googleObjects = new GoogleObjects();

Given('que o usuário esteja no site google', () => {
  googleObjects.acessarGoogle();
});
When('entrar com {string}', texto => {
  googleObjects.inputTexto(texto);
});
And('apertar enter', () => {
  googleObjects.clickEnter();
});
Then('deve visualizar a busca correspondida', () => {
  googleObjects.buscaCorrespondida();
});
