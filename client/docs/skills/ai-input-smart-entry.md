# 🤖 Funcionalidade: Lançamento Inteligente por Texto Natural (AI Input)

Esta funcionalidade permite que o usuário adicione registros ao CRUD de forma ultra-rápida, digitando ou ditando uma frase livre. A IA processa o texto e retorna um objeto JSON estritamente estruturado e tipado de acordo com o banco de dados do aplicativo.

---

## 🚀 1. System Prompt (Para a API da LLM)

Envie este prompt como `system_prompt` na chamada da API (Gemini ou Claude) para garantir que o modelo atue estritamente como um parser de dados, utilizando recursos de **Structured Outputs**.

```text
Você é um assistente de back-end especializado em extração de dados financeiros. 
Sua única tarefa é analisar uma frase em linguagem natural enviada pelo usuário, extrair os dados da transação financeira e retornar OBRIGATORIAMENTE um objeto JSON válido que siga estritamente o esquema fornecido.

Diretrizes de Extração:
1. "amount": Deve ser um número de ponto flutuante positivo (float). Se o usuário não mencionar o valor, use 0.0.
2. "category": Deve mapear o gasto para apenas uma das seguintes categorias permitidas: ['Grocery', 'Rent', 'Salary', 'Transport', 'Utilities', 'Entertainment', 'Other']. Se for ambíguo, use 'Other'.
3. "description": Uma string limpa contendo o detalhe do gasto e o local (ex: "Almoço - Restaurante Silva"). Capitalize a primeira letra.
4. "date": A data deve ser formatada estritamente como "AAAA-MM-DD". 
   - Se o usuário falar "hoje", use a Data Atual fornecida no contexto.
   - Se o usuário falar "ontem", calcule o dia anterior com base na Data Atual.
   - Se nenhuma data for mencionada, assuma a Data Atual.

Contexto de Tempo:
- Data Atual de Referência: {{DATA_ATUAL_DO_DISPOSITIVO}}

Não adicione nenhuma saudação, introdução, conclusão ou blocos de código Markdown (como ```json). Retorne apenas a string do objeto JSON puro.

---

## 🎨 2. Especificações de UI (Layout Corrigido)

Para garantir que a interface não "quebre" em diferentes tamanhos de tela, utilize a seguinte estrutura de layout (React Native):

```tsx
// Container principal da seção AI
aiSection: {
  backgroundColor: '#F0FDFA',
  borderRadius: 16,
  padding: 16,
  marginBottom: 24,
  borderWidth: 1,
  borderColor: '#CCFBF1',
},
// Container horizontal para Input + Botão
aiInputContainer: {
  flexDirection: 'row',
  alignItems: 'center', // Alinhamento central para evitar quebra vertical
  justifyContent: 'space-between',
},
// Estilo aplicado ao containerStyle do componente Input
aiInputComponentContainer: {
  flex: 1,
  marginRight: 8,
  marginBottom: 0, // Essencial: remove a margem padrão para alinhar com o botão
},
// Estilo interno do Input
aiInputField: {
  backgroundColor: '#FFFFFF',
},
// Estilo do botão de processamento
aiButton: {
  backgroundColor: '#008080',
  paddingHorizontal: 16,
  height: 52,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 80,
}
```

Este layout utiliza a nova propriedade `containerStyle` do componente `Input` para remover a margem inferior padrão (`marginBottom: 16`), garantindo que o campo de entrada e o botão fiquem perfeitamente alinhados na mesma linha horizontal.