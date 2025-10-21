# 📋 Instruções de Execução

## 🚀 Execução Rápida com Docker

### 1. Usando Docker Compose (Recomendado)
```bash
# No terminal, navegue até a pasta do projeto
cd DESTINO/LAB04

# Execute o comando
docker-compose up --build
```

### 2. Usando Docker diretamente
```bash
# Construir a imagem
docker build -t sistema-funcionarios .

# Executar o container
docker run -p 3000:3000 sistema-funcionarios
```

## 🌐 Acesso à Aplicação

Após executar qualquer um dos comandos acima:
1. Abra seu navegador
2. Acesse: `http://localhost:3000`
3. A aplicação será aberta automaticamente

## 🎯 Como Usar o Sistema

### Primeiros Passos
1. **Carregar Exemplos**: Clique em "Carregar Funcionários de Exemplo" para ver dados de demonstração
2. **Cadastrar Funcionário**: Preencha o formulário e clique em "Cadastrar"
3. **Visualizar Lista**: Os funcionários aparecerão na tabela abaixo

### Funcionalidades Principais
- ✅ **Cadastrar**: Preencha nome, idade, cargo e salário
- ✅ **Editar**: Clique em "Editar" na linha do funcionário
- ✅ **Excluir**: Clique em "Excluir" e confirme
- ✅ **Relatórios**: Clique em "Gerar Relatórios" para ver estatísticas

## 📊 Relatórios Disponíveis

1. **Funcionários com Salário > R$ 5.000**
2. **Média Salarial Geral**
3. **Lista de Cargos Únicos**
4. **Nomes em Maiúsculo**
5. **Distribuição por Faixa Etária**

## 🔧 Execução Alternativa (Sem Docker)

### Opção 1: Node.js
```bash
# Instalar dependências
npm install

# Executar
npm start
```

### Opção 2: Python
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### Opção 3: Servidor HTTP Simples
```bash
# Usando npx
npx http-server . -p 3000 -o
```

## 🐛 Solução de Problemas

### Porta 3000 em uso
```bash
# Verificar processos na porta 3000
netstat -ano | findstr :3000

# Matar processo (Windows)
taskkill /PID <PID_NUMBER> /F

# Matar processo (Linux/Mac)
kill -9 <PID_NUMBER>
```

### Docker não encontrado
- Instale o Docker Desktop
- Certifique-se de que o Docker está rodando
- Reinicie o terminal após instalação

### Erro de permissão
```bash
# Linux/Mac - Dar permissão de execução
chmod +x docker-compose.yml
```

## 📱 Teste em Diferentes Dispositivos

A aplicação é responsiva e funciona em:
- 💻 Desktop
- 📱 Tablet
- 📱 Smartphone

## 🎨 Recursos Visuais

- Interface moderna com cores corporativas
- Animações suaves
- Feedback visual para ações
- Mensagens de sucesso/erro
- Hover effects na tabela

## 📝 Dados de Exemplo

O sistema inclui 6 funcionários de exemplo:
- João Silva - Desenvolvedor Frontend
- Maria Santos - Desenvolvedora Backend  
- Pedro Costa - Gerente de Projetos
- Ana Oliveira - Designer UX/UI
- Carlos Lima - DevOps Engineer
- Lucia Ferreira - Product Manager

## 🔄 Versionamento Git

Para versionar no GitHub:

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Sistema de gestão de funcionários - LAB04"

# Conectar ao GitHub
git remote add origin <URL_DO_REPOSITORIO>

# Push inicial
git push -u origin main
```

## ✅ Checklist de Funcionalidades

- [x] Formulário HTML com validação
- [x] Classe Funcionario com getters/setters
- [x] Cadastro e listagem de funcionários
- [x] Exclusão e edição de funcionários
- [x] Funções anônimas e arrow functions
- [x] Relatórios com métodos de array
- [x] Interface responsiva
- [x] Docker configurado
- [x] Documentação completa

