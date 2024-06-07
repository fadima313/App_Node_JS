FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install --save-dev mocha
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
