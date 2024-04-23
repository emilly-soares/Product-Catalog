# 🛒 Sistema de Carrinho de Compras com Context API

Este projeto é uma aplicação React + TypeScript + Vite desenvolvida para demonstrar o uso eficaz da Context API para gerenciar dados de usuário e um carrinho de compras de forma global. 
O sistema permite que os dados sejam acessados e manipulados por diferentes componentes sem necessidade de props drilling ou gerenciadores de estado complexos.

## 🌟 Funcionalidades

### 👤 Autenticação de Usuários
- **Login de Usuário**: Os usuários podem autenticar-se no sistema usando suas credenciais (u emilly@admin.com.br s 123456).
- **UserContext**: Contexto criado para gerenciar os dados do usuário, como nome, e-mail, etc.
- **UserProvider**: Provedor de contexto que disponibiliza os dados do usuário para toda a árvore de componentes da aplicação.
- **Atualização de Dados do Usuário**: Funções implementadas para permitir a atualização dos dados do usuário dentro da aplicação.

### 📦 Gerenciamento de Produtos
- **Listagem de Produtos**: Na página inicial, os usuários podem visualizar uma lista de produtos disponíveis para compra.
- **Descrição Completa do Produto**: É possível visualizar a descrição completa de um produto em uma página dedicada a ele.
- **Favoritar Produtos**: Os usuários podem favoritar produtos, os quais são salvos no banco de dados.
- **Produtos Favoritados**: Os usuários podem visualizar uma página com uma lista de todos os produtos que eles favoritaram.

### 🛒 Gerenciamento do Carrinho de Compras
- **CartContext**: Contexto criado para gerenciar o carrinho de compras.
- **CartProvider**: Provedor de contexto que disponibiliza e gerencia o estado do carrinho de compras em toda a aplicação.
- **Funcionalidades do Carrinho**: Adicionar, remover e atualizar itens no carrinho de compras.


## 🛠️ Tecnologias Utilizadas

- TypeScript/React.js
- Context API
- Styled Components para estilização
- React Router para navegação

## 🚀 Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/emilly-soares/Product-Catalog.git
    ```
   
3. Navegue até o diretório do projeto:

    ```bash
    cd Product-Catalog
    ```

4. Instale as dependências do projeto usando o npm. No terminal, execute o seguinte comando:

    ```bash
    npm install
    ```

5. Após a conclusão da instalação das dependências, você pode iniciar o servidor localmente. Use o seguinte comando:

    ```bash
    npm run dev
    ```

## Contribuição

🤝 Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.

### Autor
📝 Feito por Emilly Soares 👋🏽


   
