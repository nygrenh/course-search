FROM ubuntu:20.04

WORKDIR /usr/src/course-search
COPY /src/ .
RUN apt-get update && apt-get install -y curl

CMD ["./app.sh"]