**Título:**

Usuário comum abre criar e editar herói pela URL

**Descrição:**

Create New Hero, lápis e lixeira só aparecem para admin no card e no header. As rotas /heroes/new e /heroes/:id/edit não verificam se o usuário é admin. A página de edição ainda mostra o formulário e o botão Delete Hero.

**Passos para Reproduzir:**

1. Entrar com test@test.com / test123.
2. Confirmar que Create New Hero não está no header.
3. Acessar http://localhost:3000/heroes/new.
4. Acessar http://localhost:3000/heroes/1/edit.

**Resultado Esperado:**

As duas URLs redirecionam ou informam que a ação é só de admin.

**Resultado Obtido:**

O formulário de criação abre. A edição abre com os dados do herói e com Delete Hero.

**Evidências:**

Rotas em client/src/components/App.tsx. O botão Delete está sempre no JSX de client/src/pages/HeroEditPage.tsx. O header só esconde o link em client/src/components/Header.tsx.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

O BUG-05 detalha o que acontece quando o usuário comum envia o formulário de criação.
