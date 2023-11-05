FROM node:19

RUN mkdir /application
WORKDIR /application

COPY app/package*.json /application
RUN npm install

COPY app /application

RUN npx rollup -c rollup.config.server.mjs

RUN chmod +x /application/start.sh

CMD ["sh", "-c", "/application/start.sh"]