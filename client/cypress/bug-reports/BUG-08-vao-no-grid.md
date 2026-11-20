**Título:**

Ao criar um herói, a listagem deixa um espaço vazio no meio e o card novo vai para a ponta

**Descrição:**

A lista usa flex com justify-between e cards de largura fixa. Na última linha, quando sobram dois cards, um cola na esquerda e o outro na direita. O herói recém-criado entra no fim da lista e cai nesse vão.

**Passos para Reproduzir:**

1. Entrar como admin@test.com / test123.
2. Com os heróis do seed na tela, criar um novo herói e salvar.
3. Voltar à listagem.
4. Olhar a última linha do grid.

**Resultado Esperado:**

Os cards seguem em sequência, sem buraco entre um card e o próximo. O herói novo aparece logo depois do último, na próxima posição da grade.

**Resultado Obtido:**

Fly Girl fica à esquerda, o meio da linha fica vazio e KavooKavala fica à direita.

**Evidências:**

Print: evidencias/BUG-08-vao-no-grid.png
A lista está em client/src/pages/HeroesListPage.tsx com flex flex-wrap justify-between. O card tem largura fixa de 280px em client/src/components/HeroCard.tsx.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

O vão aparece quando a última linha não completa três cards. Com os sete heróis do seed mais um novo, a última linha fica com dois cards e o espaço no meio.
