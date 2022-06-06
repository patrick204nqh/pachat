FROM node:16.14.2

ENV METEOR_ALLOW_SUPERUSER=true

RUN curl "https://install.meteor.com/" | sh

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN chmod -R 700 /usr/src/app/.meteor/local
RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]
