#language:pt

  Funcionalidade: Acesso ao site Google

  Esquema do Cenário: Validando acesso ao site google
  Dado que o usuário esteja no site google
  Quando entrar com <texto>
  E apertar enter
  Então deve visualizar a busca correspondida

  Exemplos:
  | texto                           |
  | "cypress" |
  | "cypress" |