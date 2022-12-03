FROM ruby:2.7

WORKDIR /app

ADD client/ ./client/

RUN gem build client/openapi_client.gemspec && \
    gem install client/openapi_client*.gem

ADD . ./

ENTRYPOINT ["ruby", "main.rb"]
