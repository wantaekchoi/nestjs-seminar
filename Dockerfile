FROM node:lts AS builder
WORKDIR /builder
COPY . .
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine AS server
WORKDIR /server
COPY package*.json .
COPY tsconfig.json .
RUN npm install
COPY --from=builder ./builder/dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start"]
