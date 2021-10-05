FROM node:16

RUN apt-get update \
  && apt-get install -y build-essential \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /app && chown -R node /app

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci

COPY . /app

EXPOSE 4365

CMD [ "npm", "run", "dev" ]
