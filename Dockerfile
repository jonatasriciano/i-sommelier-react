# Base image
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port and run the application
EXPOSE 3000
CMD ["npm", "start"]