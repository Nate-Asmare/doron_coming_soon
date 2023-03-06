FROM node:18

WORKDIR /usr/app

COPY ./package.json ./
USER root
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]