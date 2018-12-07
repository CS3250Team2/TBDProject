FROM node:8

# Create app directory
WORKDIR /usr/src

# Install app dependencies
# package.json AND package-lock.json are copied
COPY package*.json ./

# Runs npm install for dependencies
RUN npm install

# Bundle app source
COPY . .

# Map to localhost:3000
EXPOSE 3000

# Starts server
CMD [ "npm", "start" ]
