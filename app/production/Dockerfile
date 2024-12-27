FROM node:16.10.0-alpine3.13 as build



WORKDIR /usr/src/app

# hdghdgdh

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Serve the React app
FROM nginx:alpine


# Install necessary dependencies
RUN apk add --no-cache certbot python3 py3-pip py3-virtualenv

# Create and activate a virtual environment
RUN python3 -m venv /opt/certbot/
ENV PATH="/opt/certbot/bin:$PATH"

# Install Certbot and the Nginx plugin in the virtual environment
RUN pip install certbot-nginx

# remove nginx default config
RUN rm /etc/nginx/conf.d/default.conf
COPY ./production/nginx.conf /etc/nginx/conf.d

# Copy the built React app from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]