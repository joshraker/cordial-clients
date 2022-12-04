FROM golang:1.18

WORKDIR /app

ADD go.mod go.sum ./
ADD client/ ./client/
RUN go mod download

ADD . ./

ENTRYPOINT ["go", "run", "main.go"]
