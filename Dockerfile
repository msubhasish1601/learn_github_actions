# 1. Grab the "empty box" with Node.js pre-installed
FROM node:20-alpine

# 2. Create a folder inside the box to hold our code
WORKDIR /app

# 3. Copy our recipe (package.json) into the box
COPY package*.json ./

# 4. Install only the production ingredients (skips Jest)
RUN npm ci --omit=dev

# 5. Copy the rest of our code (index.js) into the box
COPY . .

# 6. Tell the box what to do when someone turns it on
CMD ["node", "index.js"]