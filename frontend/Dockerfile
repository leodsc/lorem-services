ARG VERSION=16.14-alpine
FROM node:${VERSION}
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD npm start
