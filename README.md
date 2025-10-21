# 🚀 Sistema de Gestão de Funcionários

Sistema web para gerenciamento de funcionários de uma startup de tecnologia, desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Funcionalidades

### ✅ Exercício 1 - Cadastro e Listagem
- Formulário HTML para cadastro de funcionários
- Classe `Funcionario` com construtor, getters, setters e método `toString()`
- Armazenamento em array de objetos
- Exibição dinâmica em tabela HTML

### ✅ Exercício 2 - Exclusão e Edição
- Botões para excluir funcionários
- Edição inline com carregamento de dados no formulário
- Atualização de dados usando métodos da classe
- Eventos `onclick` com funções anônimas

### ✅ Exercício 3 - Funções Anônimas e Arrow Functions
- Refatoração para uso de funções anônimas
- Implementação de arrow functions para manipulação de arrays
- Funções auxiliares com sintaxe moderna

### ✅ Exercício 4 - Relatórios com Métodos de Array
- **Funcionários com salário > R$ 5.000** (usando `filter`)
- **Média salarial** (usando `reduce`)
- **Cargos únicos** (usando `Set` e `map`)
- **Nomes em maiúsculo** (usando `map`)
- **Distribuição por faixa etária** (relatório adicional)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript ES6+** - Lógica da aplicação
- **Docker** - Containerização para desenvolvimento

## 🚀 Como Executar

### Opção 1: Docker (Recomendado)

```bash
# Construir e executar com Docker Compose
docker-compose up --build

# Ou executar diretamente com Docker
docker build -t sistema-funcionarios .
docker run -p 3000:3000 sistema-funcionarios
```

### Opção 2: Node.js

```bash
# Instalar dependências
npm install

# Executar servidor local
npm start
```

### Opção 3: Servidor HTTP Simples

```bash
# Usando Python
python -m http.server 3000

# Usando Node.js
npx http-server . -p 3000 -o
```

## 📁 Estrutura do Projeto

```
├── index.html          # Interface principal
├── script.js           # Lógica JavaScript
├── Dockerfile          # Configuração Docker
├── docker-compose.yml  # Orquestração Docker
├── package.json        # Dependências Node.js
├── .dockerignore       # Arquivos ignorados pelo Docker
└── README.md          # Documentação
```

## 🎯 Conceitos Implementados

### Classes e Objetos
- Classe `Funcionario` com encapsulamento
- Construtor com validação de dados
- Getters e setters com validação
- Método `toString()` personalizado

### Manipulação de Arrays
- `filter()` - Filtrar funcionários por critérios
- `map()` - Transformar dados
- `reduce()` - Calcular médias e totais
- `Set` - Remover duplicatas

### Eventos e DOM
- Event listeners modernos
- Manipulação dinâmica do DOM
- Validação de formulários
- Feedback visual para usuário

### Funções Modernas
- Arrow functions
- Funções anônimas
- Template literals
- Destructuring (implícito)

## 📊 Relatórios Disponíveis

1. **Funcionários com Salário Alto** - Lista funcionários que ganham mais de R$ 5.000
2. **Média Salarial** - Calcula a média salarial de todos os funcionários
3. **Cargos Únicos** - Lista todos os cargos sem repetição
4. **Nomes em Maiúsculo** - Exibe todos os nomes em letras maiúsculas
5. **Distribuição Etária** - Agrupa funcionários por faixa etária

## 🎨 Interface

- Design moderno e responsivo
- Cores corporativas (azul e branco)
- Feedback visual para ações
- Tabela interativa com hover effects
- Formulário com validação

## 🔧 Funcionalidades Extras

- **Funcionários de Exemplo** - Botão para carregar dados de demonstração
- **Validação de Dados** - Validação de idade, salário e campos obrigatórios
- **Mensagens de Feedback** - Notificações visuais para ações do usuário
- **ID Único** - Geração automática de IDs únicos para cada funcionário
- **Responsividade** - Interface adaptável para diferentes tamanhos de tela

## 📝 Exemplo de Uso

1. Acesse a aplicação no navegador
2. Clique em "Carregar Funcionários de Exemplo" para ver dados de demonstração
3. Use o formulário para cadastrar novos funcionários
4. Clique em "Editar" para modificar dados existentes
5. Clique em "Excluir" para remover funcionários
6. Use "Gerar Relatórios" para visualizar estatísticas

## 🐳 Docker

O projeto inclui configuração completa do Docker para facilitar o desenvolvimento:

- **Dockerfile** - Imagem baseada em Node.js Alpine
- **docker-compose.yml** - Orquestração com volume mounting
- **.dockerignore** - Otimização da build

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido por Felipe como parte do Laboratório 04 de Tecnologia e Construção de Software.

---

**Nota**: Este sistema foi desenvolvido para fins educacionais e demonstra os conceitos fundamentais de JavaScript, HTML, CSS e containerização com Docker.

