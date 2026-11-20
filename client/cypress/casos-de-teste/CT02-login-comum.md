# CT02 - Login com usuário válido (comum)

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o usuário comum consegue entrar na aplicação sem receber as ações exclusivas de admin.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- O usuário `test@test.com` com senha `test123` existe no banco.

## Passo a passo para reproduzir o CT

1. Acessar a página inicial.
2. Clicar em Login.
3. Preencher o e-mail `test@test.com`.
4. Preencher a senha `test123`.
5. Clicar em Sign in.

## Resultados esperados

- O botão Logout fica visível.
- O botão Create New Hero não é exibido.
