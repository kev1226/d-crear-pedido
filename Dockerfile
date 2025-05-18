# Imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto del contenedor
EXPOSE 3000

# Comando por defecto al arrancar el contenedor
CMD ["npm", "start"]
