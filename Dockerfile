# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências (se houver)
COPY package*.json ./

# Instalar dependências (se houver)
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar um servidor HTTP simples
CMD ["npx", "http-server", ".", "-p", "3000", "-o"]

