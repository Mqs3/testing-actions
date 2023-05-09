FROM node:14-alpine
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8080
CMD ["/bin/sh", "-c", "npm test ; npm start"]