# 1. Base Node image
FROM node:18-buster

# 2. Set working directory
WORKDIR /app

# 4. Copy application code
COPY . .
RUN npm install
RUN npm rebuild sqlite3 --build-from-source
RUN npx tsc

# 5. Expose port
EXPOSE 8000
CMD ["node", "dist/server.js"]