FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build

CMD [ "node", "dist/main.js" ]
