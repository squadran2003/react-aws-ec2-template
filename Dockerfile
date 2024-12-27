FROM node:16.10.0-alpine3.13

# hsgsh

WORKDIR /usr/src/

COPY ./app/package*.json ./

WORKDIR /usr/src/app

RUN yarn install

COPY ./app /usr/src/app
