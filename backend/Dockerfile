# /Users/jonatas/Documents/Projects/i-sommelier-react/backend/Dockerfile

# Use a imagem Node.js
FROM node:22

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de dependências primeiro
COPY package*.json ./

# Instale as dependências no contêiner
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta do backend
EXPOSE 4000

# Comando para iniciar o servidor
CMD ["node", "src/server.js"]