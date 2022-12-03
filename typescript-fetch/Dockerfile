FROM node:19

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install

ADD . ./

ENTRYPOINT ["npx", "ts-node", "main.ts"]
