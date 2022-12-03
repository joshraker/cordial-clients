default: all
all: go typescript-fetch ruby
.PHONY: default all go typescript-fetch ruby
FORCE:

go:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o /local/$@/client -g $@

typescript-fetch:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o /local/$@/client -g $@ \
		--additional-properties typescriptThreePlus=true

ruby:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o /local/$@/client -g $@ \
		--additional-properties useAutoload=true

build-%: FORCE
	cd '$*' && docker-compose build

run-%: build-%
	cd '$*' && docker-compose run --rm example "$$CORDIAL_USERNAME" "$$CORDIAL_PASSWORD"

