# Cofrinhos · Rendimentos

App para acompanhar, dia a dia, quanto cada cofrinho (caixinha) do Mercado Pago
rendeu — tudo num calendário, com fechamento mensal para você saber exatamente
quanto separar em cada cofre no fim do mês.

## Funcionalidades

- **Tema escuro**, na paleta de cores do Claude (fundo grafite, texto quase
  branco e destaque laranja/terracota nos botões e abas ativas; verde
  reservado só para indicar rendimento/dinheiro).
- **Calendário mensal**: cada dia mostra o rendimento total (soma de todos os
  cofrinhos). Clique em um dia para lançar ou editar os valores.
- **Campo de valor no estilo Mercado Pago**: você digita só os números e a
  vírgula é posicionada automaticamente da direita para a esquerda — "5" vira
  0,05; "55" vira 0,55; "555" vira 5,55.
- **Cofrinhos personalizáveis**: crie quantos quiser, dê nomes e cores. É
  possível arquivar um cofrinho (some da tela de lançamento, mas o histórico
  continua nos relatórios) ou excluir de vez os que nunca tiveram lançamento.
- **Navegação por mês e ano**: os botões `‹` `›` avançam/voltam mês a mês (ou
  ano a ano, no relatório anual), sem limite — não existe um "calendário por
  ano" separado, os dados são guardados por data completa (dia/mês/ano),
  então você navega livremente por qualquer mês ou ano.
- **Relatório de fechamento mensal**: total do mês, média diária e o total
  acumulado em cada cofrinho — exatamente o que você precisa no último dia do
  mês para ir ao app do banco e separar o dinheiro.
- **Relatório de fechamento anual**: a mesma ideia do mensal, mas somando o
  ano inteiro — total do ano, média diária, cofre que mais rendeu, total por
  mês e total por cofrinho.
- **Backup manual**: exporta/importa um arquivo `.json` com todos os dados,
  já que tudo é salvo localmente no navegador.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Persistência em `localStorage` (sem backend — 100% roda no navegador)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção (por exemplo, para publicar no GitHub Pages,
Vercel ou Netlify):

```bash
npm run build
npm run preview
```

## Onde os dados ficam salvos

Todos os cofrinhos e rendimentos ficam no `localStorage` do navegador — não
existe servidor nem conta de usuário. Isso significa:

- Os dados são **por navegador/dispositivo**. Se você usar o app no celular e
  no computador, eles não se sincronizam automaticamente.
- Use o botão **"Exportar backup"** de tempos em tempos (por exemplo, todo
  fim de mês) para gerar um `.json` e guardar num lugar seguro (Google Drive,
  e-mail, etc.). O botão **"Importar backup"** restaura esses dados em
  qualquer navegador.

## Possíveis evoluções futuras

- Trocar o `localStorage` por um backend real (ex: Supabase/Firebase) para
  sincronizar entre dispositivos e ter login.
- Gráfico de evolução dos rendimentos por cofrinho ao longo dos meses.
- Notificação/lembrete no último dia do mês para fazer o fechamento.

## Estrutura do projeto

```
src/
  components/
    Calendar.tsx          # grade mensal com o total por dia
    DayModal.tsx           # modal de lançamento dos valores do dia (máscara estilo Mercado Pago)
    PiggyBankManager.tsx   # CRUD dos cofrinhos
    MonthlySummary.tsx     # fechamento do mês
    AnnualSummary.tsx      # fechamento do ano
  lib/
    date.ts                # helpers de data (formato ISO, nomes de mês)
    format.ts               # formatação de moeda (BRL)
    storage.ts              # leitura/gravação no localStorage
    currencyMask.ts         # máscara de centavos (estilo Mercado Pago)
  types.ts                 # tipos (PiggyBank, YieldsByDate, BackupFile)
  App.tsx                  # estado global e abas (Calendário/Relatório mensal/anual/Cofrinhos)
```
