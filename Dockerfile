FROM node:18-alpine

WORKDIR /app

RUN rm -rf node_modules

COPY package.json ./

RUN npm install -g yarn 

RUN yarn install

copy . .

RUN yarn build

EXPOSE 80

CMD [ "node","--trace-warnings", "--es-module-specifier-resolution=node", "/app/packages/movechess-server/dist/main.js" ]

RUN  yarn start
# COPY package.json .
# COPY pnpm-*.yaml .
# COPY node_modules .

# COPY packages/movechess-server/package.json packages/movechess-server/package.json
# COPY packages/movechess-server/dist packages/movechess-server/dist
# COPY packages/movechess-server/node_modules packages/movechess-server/node_modules

# RUN pnpm install

# CMD [ "node","--trace-warnings", "--es-module-specifier-resolution=node", "/app/packages/movechess-server/dist/main.js" ]
