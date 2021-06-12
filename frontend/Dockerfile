FROM node:lts-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN yarn install

RUN yarn run build

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html

EXPOSE 80