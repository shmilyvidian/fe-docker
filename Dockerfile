FROM node:latest
WORKDIR web
COPY package.json /web/package.json
RUN yarn
COPY . /web/
EXPOSE 4000
CMD ["npm", "start"]
