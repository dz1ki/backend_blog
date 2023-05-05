FROM node:16.14.2-alpine
WORKDIR /backend_blog
COPY package*.json ./
RUN npm install
COPY . .
