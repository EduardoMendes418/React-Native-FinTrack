# Instruções do Projeto - FinTrack App

Este arquivo contém as convenções e padrões arquiteturais estabelecidos para o projeto FinTrack.

## 📁 Estrutura do Projeto
- **client/**: Contém o frontend (React Native/Expo) e os testes End-to-End (Cypress).
- **server/**: Contém o backend (Node.js/Express).

## 🏗️ Arquitetura e Padrões (Client)
- **Componentes:** Devem ser funcionais, utilizando TypeScript para tipagem rigorosa de Props e Estados.
- **Navegação:** Utilizar `react-navigation`. Estruturar em `client/src/navigation` separando Stacks de Tabs.
- **Identidade Visual:** Seguir as cores padrão: Teal (#008080), Dark Navy (#1E293B) e Slate Grey (#64748B).
- **Testabilidade:** **Obrigatório** o uso da propriedade `testID` em todos os elementos interativos (botões, inputs, links) para facilitar a automação.
- **Serviços:** Lógicas de persistência e chamadas de API devem ser isoladas em `client/src/services/`.

## 🧪 Estratégia de Testes
- **Unitários (Jest):** Obrigatórios para novos serviços, componentes de UI e lógicas de tela. Localizados em `client/__tests__/` e `server/__tests__/`.
- **E2E (Cypress):** Padrão para testes de integração e fluxos críticos de usuário na plataforma Web. Localizados em `client/cypress/e2e/`. Para executar, use `npm run cy:open` ou `npm run cy:run` dentro da pasta `client`.

## 🚀 Workflows
- **Frontend**: Entre em `client/` e use `npm start`.
- **Backend**: Entre em `server/` e use `npm start`.
- **Testes E2E**: Certifique-se de que o frontend está rodando e use `npm run cy:run` dentro de `client/`.
- Novos modelos de dados devem ser declarados em `client/src/types/index.ts`.
