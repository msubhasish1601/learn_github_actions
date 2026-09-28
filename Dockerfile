FROM node:20-alpine
WORKDIR /app
COPY index.js .
# Tell Docker this container listens on port 3000
EXPOSE 3000
CMD ["node", "index.js"]