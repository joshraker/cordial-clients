FROM ruby:2.7

WORKDIR /app

ADD client/ ./client/

RUN cd client && \
    gem build cordial.gemspec && \
    gem install cordial*.gem

ADD . ./

ENTRYPOINT ["ruby", "main.rb"]
