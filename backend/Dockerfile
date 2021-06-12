FROM python:3.9.5-slim-buster
RUN apt-get -y update && apt-get -y install netcat curl && apt-get clean && rm -rf /var/lib/apt/lists/*
ENV PYTHONUNBUFFERED=1
ENV PIP_DEFAULT_TIMEOUT 200
WORKDIR /opt/io
COPY poetry.lock ./
COPY pyproject.toml ./
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir poetry \
    poetry self update
# Project initialization:
RUN poetry config virtualenvs.create false \
  && poetry install $([ "$APP_ENV" = "production" ] && echo "--no-dev") --no-interaction --no-ansi
COPY . ./
COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["./entrypoint.sh"]