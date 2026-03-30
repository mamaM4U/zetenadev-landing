FROM joseluisq/static-web-server:2-alpine

COPY ./out /public

ENV SERVER_ROOT=/public
ENV SERVER_PORT=80
ENV SERVER_HOST=0.0.0.0
