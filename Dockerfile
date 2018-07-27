FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i yandex-dialogs-sdk --save
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]