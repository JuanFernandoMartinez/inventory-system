# Dockerfile
FROM node:18-alpine
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
