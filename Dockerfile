FROM node:alpine
RUN mkdir app
WORKDIR app
ADD ./OmdbBack/omdbreduxbackend/package.json package.json
RUN npm install
ADD ./OmdbBack/omdbreduxbackend/app.js app.js
EXPOSE 8080