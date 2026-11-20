# CT03 - Login inválido

**Aplicação:** Cypress Heroes
**Autor:** Willian Cristian
**Objetivo do CT:** Confirmar que um e-mail válido com senha incorreta não autentica o usuário.

## Pré-condições

- A aplicação está disponível em http://localhost:3000.
- O usuário `admin@test.com` existe no banco.

## Passo a passo para reproduzir o CT

1. Acessar a página inicial.
2. Clicar em Login.
3. Preencher o e-mail `admin@test.com`.
4. Preencher a senha `senha-errada`.
5. Clicar em Sign in.

## Resultados esperados

- A mensagem `Invalid email or password` fica visível.
- O botão Logout não é exibido.
- O botão Login permanece na tela.
