FROM node:18.18.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
COPY . ./
ENV PORT=3000
EXPOSE $PORT
CMD ["npm" , "start"]
