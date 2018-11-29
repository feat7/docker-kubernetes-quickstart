FROM node:alpine

WORKDIR /home/nodejs-redis

COPY ./package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]