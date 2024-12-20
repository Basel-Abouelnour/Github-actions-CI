# Use Node image
FROM node:16
 
# Set working directory
WORKDIR /app
 
# Copy app files
COPY . /app
 
# Install dependencies
RUN npm install
 
# Expose port
EXPOSE 3000
 
# Start the frontend
CMD ["npm", "start"]
