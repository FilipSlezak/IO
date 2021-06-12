#!/bin/sh

until nc -z db 5432; do sleep 1; done
python3 manage.py migrate
python3 manage.py collectstatic --noinput
exec "$@"