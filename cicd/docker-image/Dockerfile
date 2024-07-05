FROM node:16.12.0-alpine3.14

WORKDIR /opt/nodejs
COPY .env  package.json tsconfig.json ./
COPY node_modules/ ./node_modules
COPY prisma/ ./prisma
COPY src/ ./src
CMD npm run dev -p 3001