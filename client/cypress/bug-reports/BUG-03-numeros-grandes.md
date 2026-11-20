**Título:**

Fans, saves e preço acima de 10.000 aparecem com valor errado no card

**Descrição:**

A função shortNumber divide milhões por 100.000, não por 1.000.000. Um milhão exato não entra na faixa de milhões e aparece como 1000K.

**Passos para Reproduzir:**

1. Entrar como admin@test.com / test123.
2. Editar um herói e salvar Fans = 2000000.
3. Voltar à listagem e ler o card.
4. Repetir com Fans = 1000000.

**Resultado Esperado:**

2.000.000 aparece como 2M. 1.000.000 aparece como 1M ou 1.000.000.

**Resultado Obtido:**

2.000.000 aparece como 20M. 1.000.000 aparece como 1000K.

**Evidências:**

client/src/utils/format.ts. O card usa essa função em client/src/components/HeroCard.tsx.

**Ambientes:**

- **Ambiente:** local, front http://localhost:3000 e API http://localhost:3001

**Observações Adicionais:**

O mesmo cálculo vale para price e saves no card da listagem.
