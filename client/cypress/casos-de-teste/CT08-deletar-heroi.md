# CT08 - Deletar o herói criado

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o administrador remove um herói pela lixeira do card e ele deixa de aparecer na listagem.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- Existe um herói criado com nome `Test Hero` seguido do id.
- O usuário `admin@test.com` está autenticado na página inicial.

## Passo a passo para reproduzir o CT

1. No card do herói, clicar na lixeira.
2. Conferir o modal com o título `Delete Hero?`.
3. Clicar em Yes.

## Resultados esperados

- O card desse herói não aparece mais na listagem.
