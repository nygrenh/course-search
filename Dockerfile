FROM node:14.17.6

WORKDIR /usr/src/course-search
COPY /src/ .
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

CMD ["node", "app.js"]