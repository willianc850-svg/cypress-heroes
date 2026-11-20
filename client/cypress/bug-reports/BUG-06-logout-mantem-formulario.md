**Título:**

Logout na tela de novo herói deixa o formulário aberto

**Descrição:**

Na rota /heroes/new, o Logout encerra a sessão, mas não troca de página. O formulário de cadastro continua na tela com o usuário deslogado.

**Passos para Reproduzir:**

1. Entrar com test@test.com / test123.
2. Acessar http://localhost:3000/heroes/new.
3. Clicar em Logout.
4. Observar a URL e o conteúdo da página.

**Resultado Esperado:**

O logout volta para a listagem, ou para uma tela em que o formulário de criação não permanece.

**Resultado Obtido:**

O botão passa a ser Login e a URL continua /heroes/new, com o formulário de cadastro visível.

**Evidências:**

logout em client/src/hooks/auth.hook.ts só apaga o token e o usuário. client/src/components/Header.tsx não navega depois do clique.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

O mesmo Logout, feito na listagem, permanece na listagem, que é uma tela pública.
