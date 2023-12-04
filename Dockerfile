FROM node:18

WORKDIR /opt/app

RUN chown node:node -R /opt/app

USER node

COPY --chown=node:node . /opt/app

EXPOSE 3333

CMD yarn install && yarn dev