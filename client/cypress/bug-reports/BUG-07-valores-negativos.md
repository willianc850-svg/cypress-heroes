**Título:**

É possível salvar herói com price, fans e saves negativos

**Descrição:**

O formulário aceita números negativos e a API grava esses valores. Price, fans e saves negativos não fazem sentido para o card.

**Passos para Reproduzir:**

1. Entrar como admin@test.com / test123.
2. Criar ou editar um herói.
3. Informar Price -2, Fans -1 e Saves -2.
4. Selecionar um poder e clicar em Submit.
5. Localizar o card na listagem.

**Resultado Esperado:**

O formulário impede valores menores que zero e não salva o herói assim.

**Resultado Obtido:**

O herói é salvo. O card KavooKavala exibe $-2, -1 e -2.

**Evidências:**

Print: evidencias/BUG-07-kavookavala-negativo.png
Os campos em client/src/components/HeroForm.tsx só têm required, sem mínimo.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

No print, o herói KavooKavala está com Price $-2, Fans -1 e Saves -2.
