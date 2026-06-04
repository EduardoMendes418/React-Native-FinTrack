# FinTrack - Gestor de Finanças Pessoais e Orçamentos

FinTrack é um aplicativo de gestão financeira pessoal completo, desenvolvido com React Native e Expo. Ele oferece uma interface moderna e intuitiva para controle de gastos, orçamentos e metas de economia, seguindo rigorosos padrões de engenharia de software e testes automatizados.

## 🚀 Funcionalidades

- **Dashboard Financeiro:** Visualização de saldo total e gráficos de resumo.
- **Gestão de Transações:** Fluxo completo de criação, listagem e filtragem de receitas e despesas.
- **Controle de Orçamentos:** Monitoramento visual de limites de gastos por categoria.
- **Analytics (Análises):** Gráficos detalhados de gastos mensais e detalhamento por categoria.
- **Metas de Economia:** Acompanhamento de progresso para objetivos financeiros.
- **Navegação Intuitiva:** Fluxo de onboarding, login e navegação por abas.
- **Persistência Local:** Armazenamento seguro via `@react-native-async-storage/async-storage`.

## 🛠️ Tecnologias Utilizadas

- **Core:** [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/) (SDK 56).
- **Navegação:** [React Navigation](https://reactnavigation.org/).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/).
- **Ícones:** [Lucide React Native](https://lucide.dev/).
- **Estilização:** StyleSheet (Vanilla CSS patterns).
- **Testes Unitários:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/).
- **Testes E2E (Web):** [Cypress](https://www.cypress.io/).

## 📦 Como Executar

1.  **Instale as dependências:**

    ```bash
    npm install
    ```

2.  **Inicie o ambiente:**

    ```bash
    # Mobile (Android/iOS)
    npx expo start

    # Web (Necessário para os testes E2E)
    npm run web
    ```

## 🧪 Suíte de Testes

O projeto adota uma pirâmide de testes para garantir a estabilidade:

### 1. Testes de Unidade e Integração (Jest)

Focados em componentes UI, lógica de telas e serviços de armazenamento.

- **Cobertura:** 33 testes unitários distribuídos em 10 suítes.
- **Comando:** `npm test`

### 2. Testes de Ponta a Ponta (Cypress)

Focados no fluxo real do usuário (Onboarding -> Login -> Dashboard -> Transações).

- **Comandos:**
  - `npm run test:e2e`: Executa o app e os testes simultaneamente.
  - `npm run cy:open`: Abre o Cypress Dashboard.

## 📂 Estrutura de Pastas

- `src/components`: Componentes de UI reutilizáveis (`Button`, `Input`, `FinCard`).
- `src/screens`: Telas principais do aplicativo.
- `src/navigation`: Configuração de rotas (Stack e Tabs).
- `src/services`: Camada de dados e persistência (`financeStorage.ts`).
- `src/types`: Definições de tipos TypeScript.
- `__tests__`: Suítes de testes unitários.
- `cypress/e2e`: Especificações de testes E2E.

![alt text](docs/img/Gemini-CLI.jpg)
