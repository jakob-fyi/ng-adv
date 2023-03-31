##### Stage 1 - Create the build-image
FROM node:18 as node
LABEL author="Alexander Pajer"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- -c production

##### Stage 2 - Create the run-time-image
FROM nginx:alpine
VOLUME /var/cache/nginx

# Take from node-build
COPY --from=node /app/dist/food-order-ui /usr/share/nginx/html
# Take from project folder
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
# Environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

# docker build --rm -f Dockerfile -t food-order-ui .
# docker run -d --rm -p 5052:80 --env ENV_FUNC_EP="https://foodorders-20388.azurewebsites.net/api" food-order-ui
# attach shell and execute: echo ${ENV_API_URL}
# browse using http://localhost:5052/

# Publish Image to dockerhub
# docker tag food-order-ui arambazamba/food-order-ui
# docker push arambazamba/food-order-ui
