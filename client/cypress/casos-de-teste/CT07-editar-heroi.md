# CT07 - Editar o herói criado

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o administrador altera os dados de um herói e a listagem passa a mostrar os novos valores.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- Existe um herói criado com nome `Test Hero` seguido do id.
- O usuário `admin@test.com` está autenticado na página inicial.

## Passo a passo para reproduzir o CT

1. No card do herói, clicar no lápis.
2. No campo Name, acrescentar ` edited` ao final do nome.
3. Preencher Price com `12`.
4. Preencher Fans com `34`.
5. Preencher Saves com `56`.
6. Selecionar os poderes Fireball e Super Strength.
7. Clicar em Submit.

## Resultados esperados

- A aplicação volta para `/heroes`.
- O card exibe o nome original seguido de ` edited`.
- O card exibe preço 12, 34 fans, 56 saves e os poderes Fireball e Super Strength.
