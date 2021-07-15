FROM node:12-alpine as dev

LABEL maintainer="jaegeon <zezaeoh@gmail.com>"

RUN apk add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone && \
    apk del tzdata

ENV NODE_ENV=development
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

CMD [ "yarn", "start:dev" ]

FROM node:12-alpine as prod

LABEL maintainer="jaegeon <zezaeoh@gmail.com>"

RUN apk add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone && \
    apk del tzdata

ENV NODE_ENV=production
WORKDIR /app

COPY --from=dev /app/dist dist
COPY --from=dev /app/package.json package.json
COPY --from=dev /app/yarn.lock yarn.lock
COPY --from=dev /app/.env .env

RUN yarn install --production=true

CMD [ "yarn", "start:prod" ]
