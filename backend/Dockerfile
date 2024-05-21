FROM node:20.11.1-alpine
#Using alpine image as it is lighter than ubuntu

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]