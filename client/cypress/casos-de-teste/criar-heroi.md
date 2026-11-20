# CT05 - Criar novo herói (admin)

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o administrador consegue cadastrar um herói pelo formulário e vê-lo na listagem.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- O usuário `admin@test.com` está autenticado na página inicial.

## Passo a passo para reproduzir o CT

1. Clicar em Create New Hero.
2. Preencher Name com `New Test Hero`.
3. Preencher Price com `12`.
4. Preencher Fans com `34`.
5. Preencher Saves com `56`.
6. Selecionar os poderes Fireball e Super Strength.
7. Clicar em Submit.

## Resultados esperados

- A aplicação volta para `/heroes`.
- O card `New Test Hero` exibe preço 12, 34 fans, 56 saves e os poderes Fireball e Super Strength.
