FROM node:18.12.0-alpine3.16
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD src/app.js ./src/
# CMD [ "node", "app.js"]
