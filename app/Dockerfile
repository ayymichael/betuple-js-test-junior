FROM node:16 as builder

RUN mkdir /application
WORKDIR /application

COPY app/package*.json /application
RUN npm install

COPY app /application

RUN npx rollup -c rollup.config.app.js
RUN node build-hash.js

FROM nginx:1.22 

COPY --from=builder /application/public/index.html /usr/share/nginx/html
COPY --from=builder /application/dist /usr/share/nginx/html/static

COPY app/start.sh /docker-entrypoint.d/start.sh
RUN chmod +x /docker-entrypoint.d/start.sh

COPY nginx/default.conf /etc/nginx/conf.d/
