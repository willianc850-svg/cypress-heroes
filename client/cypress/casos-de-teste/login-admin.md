# CT01 - Login com usuário válido (admin)

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que o administrador consegue entrar na aplicação e passa a ver as ações exclusivas de admin.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- O usuário `admin@test.com` com senha `test123` existe no banco.

## Passo a passo para reproduzir o CT

1. Acessar a página inicial.
2. Clicar em Login.
3. Preencher o e-mail `admin@test.com`.
4. Preencher a senha `test123`.
5. Clicar em Sign in.

## Resultados esperados

- O botão Logout fica visível.
- O botão Create New Hero fica visível.
