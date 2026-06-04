# Instruções do Projeto - FinTrack App

Este arquivo contém as convenções e padrões arquiteturais estabelecidos para o projeto FinTrack.

## 🏗️ Arquitetura e Padrões
- **Componentes:** Devem ser funcionais, utilizando TypeScript para tipagem rigorosa de Props e Estados.
- **Navegação:** Utilizar `react-navigation`. Estruturar em `src/navigation` separando Stacks de Tabs.
- **Identidade Visual:** Seguir as cores padrão: Teal (#008080), Dark Navy (#1E293B) e Slate Grey (#64748B).
- **Testabilidade:** **Obrigatório** o uso da propriedade `testID` em todos os elementos interativos (botões, inputs, links) para facilitar a automação.
- **Serviços:** Lógicas de persistência e chamadas de API devem ser isoladas em `src/services/`.

## 🧪 Estratégia de Testes
- **Unitários (Jest):** Obrigatórios para novos serviços, componentes de UI e lógicas de tela. Localizados em `__tests__/`.
- **E2E (Cypress):** Padrão para testes de integração e fluxos críticos de usuário na plataforma Web. Localizados em `cypress/e2e/`.
- **Segurança:** Manter `allowCypressEnv: false` em `cypress.config.js`.

## 🚀 Workflows
- Sempre rodar `npm test` antes de realizar commits.
- Para validar fluxos de usuário complexos, utilizar `npm run test:e2e`.
- Mensagens de erro em testes devem ser resolvidas com foco em "Clean Output".
- Novos modelos de dados devem ser declarados em `src/types/index.ts`.
