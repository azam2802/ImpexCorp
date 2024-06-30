FROM node:20.14.0-alpine
WORKDIR /impexapp
COPY ./package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]