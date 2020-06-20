FROM node:latest

ENV HOME=/home/app
COPY package.json $HOME/ego/
WORKDIR $HOME/ego
ENV NODE_PATH=/home/node_modules
VOLUME $NODE_PATH

CMD yarn dev
