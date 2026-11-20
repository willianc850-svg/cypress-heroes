**Título:**

O botão de curtir só aumenta os fans e não permite retirar o like

**Descrição:**

Cada clique no like soma 1 aos fans. Um segundo clique não desfaz o primeiro. O comportamento esperado de um like é alternar: o primeiro clique marca, o segundo desmarca e devolve o número anterior.

**Passos para Reproduzir:**

1. Entrar com test@test.com / test123 ou com admin@test.com / test123.
2. Anotar a quantidade de fans de um herói na listagem.
3. Clicar uma vez no botão de curtir desse card.
4. Conferir que os fans aumentaram 1.
5. Clicar de novo no mesmo botão.

**Resultado Esperado:**

O segundo clique retira o like e os fans voltam ao valor anotado no passo 2.

**Resultado Obtido:**

O segundo clique soma de novo. Os fans só aumentam.

**Evidências:**

handleLikeHero em client/src/pages/HeroesListPage.tsx sempre envia fans + 1. Não há estado de like por usuário.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

O mesmo botão existe para admin e para usuário comum.
