FROM node:alpine

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json .
RUN npm install --silent

EXPOSE 3000

VOLUME [ "/app/logs" ] 

# add app
COPY . .

# start app
CMD ["npm", "start"]
