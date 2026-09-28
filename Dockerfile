# Use a lightweight Node image
FROM node:20-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Command to run your app (assumes you have a "start" script in package.json)
CMD ["npm", "start"]