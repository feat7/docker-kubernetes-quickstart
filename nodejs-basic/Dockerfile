FROM node:alpine

WORKDIR /home/node-basic

COPY ./package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]