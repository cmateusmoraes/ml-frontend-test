# 🚀 Projeto: Teste de Front-End para Mercado Livre - Camada Backend

## 📝 Descrição

Este projeto foi desenvolvido como parte de um teste para uma vaga de desenvolvedor, focado na criação de uma API que
integra com a API do Mercado Livre para buscar e exibir itens e seus detalhes. Ele inclui testes automatizados,
configuração de ESLint, Prettier para formatação, documentação da API com Swagger, e outras práticas de desenvolvimento
de software para garantir a qualidade e escalabilidade.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Back-end da aplicação
- **Express**: Framework para rotas e gerenciamento de middlewares
- **TypeScript**: Para garantir tipagem estática e maior segurança no código
- **Jest**: Para testes automatizados
- **Supertest**: Para testar rotas HTTP
- **Axios**: Para realizar requisições à API externa do Mercado Livre
- **ESLint**: Para garantir a padronização de código
- **Prettier**: Para garantir formatação consistente do código
- **Swagger**: Para gerar documentação interativa da API

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 20 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/cmateusmoraes/ml-frontend-test.git
   ```
    - Acessar a pasta /backend

2. **Instalar dependências:**

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente.**

- Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

   ```bash
   PORT=3000
   ALLOWED_DOMAIN=http://localhost:3001
   API_BASE_URL=https://api.mercadolibre.com
   ```

4. **Rodar o projeto em ambiente de desenvolvimento:**

   ```bash
   npm run dev
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

8. **Acessar a documentação da API:**
- A documentação da API gerada pelo Swagger estará disponível em:

   ```bash
   http://localhost:3000/docs
    ```

## 📂 Estrutura do Projeto

```bash
├── src
│   ├── routes
│   │   └── items.ts
│   ├── types
│   │   └── apiTypes.ts       # Tipos usados nas respostas e requisições
│   ├── app.ts                # Configuração do servidor Express
│   ├── config.ts             # Configurações do projeto
│   ├── server.ts             # Inicialização do servidor
│   └── swagger.ts            # Configuração do Swagger para documentação da API
├── tests
│   └── items.test.ts         # Testes automatizados das rotas
├── .env                      # Variáveis de ambiente
├── .prettierrc               # Configuração do Prettier
├── eslint.config.mjs         # Configuração do ESLint
├── jest.config.ts            # Configuração do Jest para testes
├── package.json              # Dependências e scripts do projeto
├── package-lock.json         # Versões exatas das dependências instaladas
├── README.md                 # Documentação do projeto
├── tsconfig.json             # Configurações do TypeScript
```

## ✅ Cuidados Tomados no Desenvolvimento

- **Clean Code**: Segui as melhores práticas de Clean Code, como nomenclaturas claras, funções pequenas e coesas, e boa organização dos arquivos.

- **Documentação com Swagger**: A API possui documentação interativa gerada automaticamente com Swagger. Isso facilita a interação com os endpoints e melhora a comunicação com outros desenvolvedores.

- **Testes Automatizados**: Foram implementados testes com Jest e Supertest para garantir a confiabilidade das rotas, incluindo a busca de itens e exibição de detalhes. Um ID dinâmico é obtido nos testes para evitar a dependência de um ID fixo, que pode expirar.

- **Rate Limiting**: Implementei um middleware de rate limiting para limitar o número de requisições por IP, evitando sobrecarga no servidor.

- **Helmet e CORS**: Usei Helmet para adicionar headers de segurança e CORS para permitir requisições apenas de domínios permitidos.

- **Tratamento de Erros**: Cuidados foram tomados no tratamento de erros, tanto nas rotas quanto nas requisições à API externa. Mensagens de erro específicas são retornadas para melhorar a usabilidade da API.

- **ESLint Configurado**: Para garantir a qualidade e consistência do código, foi configurado o ESLint com o plugin `unused-imports` e `perfectionist` para remover imports não utilizados.

- **Prettier para Formatação de Código**: Utilizei Prettier para garantir que o código siga um padrão de formatação consistente, facilitando a leitura e manutenção.

- **Configuração de Variáveis de Ambiente**: Utilização de variáveis de ambiente para flexibilizar a configuração da API e permitir sua fácil adaptação a diferentes ambientes.

- **Separação de Responsabilidades**: As funcionalidades estão separadas em arquivos distintos, como rotas, configuração do servidor, e middlewares, seguindo o princípio de separação de responsabilidades.
