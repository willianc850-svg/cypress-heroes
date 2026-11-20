# CT09 - Controle de permissão (UI)

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que criar, editar e excluir herói aparecem só para o administrador.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- Existe um herói criado com nome `Test Hero` seguido do id.

## Passo a passo para reproduzir o CT

1. Entrar com `admin@test.com` e senha `test123`.
2. Acessar a página inicial.
3. Observar o botão Create New Hero e, no card do herói, o lápis e a lixeira.
4. Entrar com `test@test.com` e senha `test123`.
5. Acessar a página inicial.
6. Observar o botão Create New Hero e, no mesmo card, o lápis e a lixeira.

## Resultados esperados

- Com o administrador, Create New Hero, o lápis e a lixeira ficam visíveis.
- Com o usuário comum, Create New Hero, o lápis e a lixeira não são exibidos.
