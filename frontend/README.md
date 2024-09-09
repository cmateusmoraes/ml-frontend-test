# 🚀 Projeto: Teste de Front-End para Mercado Livre - Camada Frontend

## 📝 Descrição

Este projeto foi desenvolvido como parte de um teste para uma vaga de desenvolvedor, focado em simular a busca de
produtos no Mercado Libre. O projeto inclui otimizações de performance e boas práticas para garantir a qualidade e
eficiência do código, como a utilização de estrutura semântica do HTML, cuidados com acessibilidade, performance, SEO,
escalabilidade, responsividade, componentização entre outros.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal usada para criação de interfaces de usuário.
- **TypeScript**: Usado para garantir tipagem estática e segurança de código.
- **Sass**: Utilizado para criar estilos modulares e reutilizáveis.
- **SWR**: Implementado para gerenciamento eficiente de cache e requisições, melhorando o desempenho da aplicação ao buscar dados da API.
- **React Router**: Para gerenciamento de rotas e navegação entre as páginas da aplicação.
- **React Helmet**: Manipulação das tags title, description e preload de imagens para melhoria de performance.
- **Jest**: Framework de testes utilizado para implementação de testes unitários e de integração.
- **ESLint**: Ferramenta para análise estática de código, utilizada para garantir boas práticas e consistência.
- **Prettier**: Ferramenta para formatação de código, garantindo que todo o código siga o mesmo estilo de formatação.


## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 20 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/cmateusmoraes/ml-frontend-test.git
   ```
   - Acessar a pasta /frontend
   

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente.**

- Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

   ```bash
   REACT_APP_API_URL=http://localhost:3000/api
   ```

4. **Rodar o projeto em ambiente de desenvolvimento:**

   ```bash
   npm run start
   ```

5. **Rodar os testes:**

- Para rodar os testes automatizados, use:

   ```bash
   npm test
    ```

6. **Rodar o ESLint para verificar problemas de código:**

- Para rodar o ESLint e verificar se o código segue as regras estabelecidas::

   ```bash
   npm run lint
    ```

7. **Rodar o Prettier para formatar o código:**

- Para garantir que o código siga o padrão de formatação do projeto:

   ```bash
   npm run format
    ```

## 📂 Estrutura do Projeto

```bash
frontend/
│
├── src/
│   ├── components/             # Componentes reutilizáveis
│   ├── hooks/                  # Hooks customizados (ex: useFetch.ts)
│   ├── pages/                  # Páginas da aplicação
│   ├── services/               # Chamadas à API
│   ├── styles/                 # Estilos globais e componentes em SCSS
│   ├── tests/                  # Testes unitários e de integração
│   ├── types/                  # Definição de tipos TypeScript
│   ├── utils/                  # Funções auxiliares e utilitários
│   ├── App.tsx                 # Componente principal da aplicação
│   ├── index.tsx               # Ponto de entrada do React
│   ├── setupTests.ts           # Configurações para testes
│   └── jest.config.ts          # Configuração do Jest
│
├── .env                        # Variáveis de ambiente
├── .eslintignore               # Arquivos ignorados pelo ESLint
├── .eslintrc.json              # Configurações do ESLint
├── .prettierrc                 # Configurações do Prettier
├── package.json                # Dependências e scripts do projeto
├── README.md                   # Documentação do projeto
└── tsconfig.json               # Configurações do TypeScript
```

## ✅ Cuidados Tomados no Desenvolvimento

Durante o desenvolvimento deste projeto, foram adotadas diversas boas práticas para garantir qualidade, escalabilidade e manutenibilidade do código:

- **Clean Code**: O código foi escrito seguindo os princípios de clean code, com nomenclaturas claras e funções bem definidas.
- **TypeScript**: O uso de TypeScript garante a segurança de tipos, ajudando a evitar bugs comuns de JavaScript.
- **Componentização**: Os componentes React foram desenvolvidos com foco na reutilização e independência, evitando redundâncias e melhorando a organização do projeto.
- **Responsividade**: O projeto é totalmente responsivo, garantindo uma boa experiência em diferentes dispositivos.
- **Prettier**: Ferramenta usada para garantir a consistência de estilo de código em todo o projeto.
- **ESLint Configurado**: Para garantir a qualidade e consistência do código, foi configurado o ESLint com o plugin `unused-imports` e `perfectionist` para remover imports não utilizados.
- **Sass (SCSS)**: Utilizado para organizar melhor os estilos, com a criação de variáveis, mixins, e componentes de estilo reutilizáveis.
- **SWR**: Utilizado para gerenciamento eficiente de requisições, com suporte a revalidação e cache automático, melhorando a performance da aplicação.
- **Testes Automatizados**: Foram implementados testes utilizando **Jest** e **Testing Library** para garantir a integridade dos componentes e a correta funcionalidade da aplicação.

## 🔍 Acessibilidade
Foi dada especial atenção à acessibilidade, com o uso correto de atributos **ARIA**, papéis semânticos, e boas práticas de acessibilidade para garantir que a aplicação seja utilizável por pessoas com diferentes necessidades.

## 💾 Performance
A aplicação foi otimizada para garantir a melhor performance possível, utilizando técnicas como:
- **Preload de Imagens** para otimizar o carregamento das imagens mais importantes (LCP).
- **Lazy Loading** para carregar páginas e componentes pesados de forma assíncrona, melhorando o tempo de resposta inicial da aplicação.

