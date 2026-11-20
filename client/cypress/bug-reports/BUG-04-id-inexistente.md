**Título:**

Editar um herói com id que não existe deixa a tela branca

**Descrição:**

Ao abrir /heroes/{id}/edit com um id que não existe, a API responde 404. O front trata o corpo do erro como se fosse um herói. O formulário então lê powers de um objeto sem essa lista e quebra. Não há mensagem para o usuário.

**Passos para Reproduzir:**

1. Entrar como admin@test.com / test123.
2. Alterar a URL para http://localhost:3000/heroes/9999999/edit.
3. Pressionar Enter.
4. Abrir o console do navegador.

**Resultado Esperado:**

A tela informa que o herói não existe e oferece volta à listagem.

**Resultado Obtido:**

A tela fica branca. O console mostra GET http://localhost:3001/heroes/999 404 (Not Found) e Uncaught TypeError: Cannot read properties of undefined (reading 'map') em HeroForm.tsx:104.

**Evidências:**

Log do console. A linha 104 de client/src/components/HeroForm.tsx é hero?.powers.map. O getHero em client/src/hooks/heroes.hook.ts não verifica response.ok. Não existe error boundary.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001, Chrome

**Observações Adicionais:**

No log capturado a chamada foi GET /heroes/999. O mesmo efeito ocorre com qualquer id inexistente, inclusive 9999999. As linhas chrome-extension://invalid são de extensão do navegador.
