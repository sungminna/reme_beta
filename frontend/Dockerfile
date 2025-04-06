# 1. Base Node image
FROM node:18-alpine

# 2. Build stage
WORKDIR /app
COPY . .
RUN npm install
RUN PORT=3000 npm run build

EXPOSE 3000
CMD ["npx", "remix-serve", "build/index.js"]