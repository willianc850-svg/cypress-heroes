**Título:**

Usuário comum abre /heroes/new pela URL e o Submit não cria o herói

**Descrição:**

Sem o botão Create New Hero, o usuário comum ainda chega no formulário digitando a URL. O preenchimento e o Submit não criam o herói, e a tela não explica a falha. Essa tela não deveria abrir para esse usuário.

**Passos para Reproduzir:**

1. Entrar com test@test.com / test123.
2. Acessar http://localhost:3000/heroes/new.
3. Preencher Name, Price, Fans, Saves e ao menos um poder.
4. Clicar em Submit.
5. Voltar à listagem e procurar o nome informado.

**Resultado Esperado:**

A URL de criação não abre para usuário comum. Se a tela existisse, o Submit informaria que a ação não é permitida.

**Resultado Obtido:**

O formulário abre. O Submit não cria o herói e não mostra mensagem.

**Evidências:**

client/src/pages/HeroNewPage.tsx só navega no sucesso e não tem tratamento de erro. O POST /heroes exige admin.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

A abertura da rota também está no BUG-02. Este report cobre o Submit sem criação e sem aviso.
