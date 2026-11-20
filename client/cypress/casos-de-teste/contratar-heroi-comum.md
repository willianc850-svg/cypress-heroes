# CT13 - Teste do botão de contratar herói (comum)

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o usuário comum aumenta em 1 a quantidade de saves ao contratar um herói.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- Existe um herói criado com 1 save.
- O usuário `test@test.com` está autenticado na página inicial.

## Passo a passo para reproduzir o CT

1. No card do herói, clicar no botão de contratar.
2. Conferir o modal com o título `Hire Hero?`.
3. Clicar em Yes.

## Resultados esperados

- A quantidade de saves do card passa a ser 2.
