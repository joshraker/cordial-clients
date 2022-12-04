default: all
all: go typescript-fetch ruby
.PHONY: default all go typescript-fetch ruby
FORCE:

CLIENT_DIR=client

go:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o '/local/$@/${CLIENT_DIR}' -g '$@' \
		-p packageName=cordial \
		-p packageVersion=1.0.0

typescript-fetch:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o '/local/$@/${CLIENT_DIR}' -g '$@' \
		-p typescriptThreePlus=true \
		-p npmName=cordial \
		-p npmVersion=1.0.0

ruby:
	docker-compose run --rm openapi-codegen generate -i /local/openapi.yml -o '/local/$@/${CLIENT_DIR}' -g '$@' \
		-p useAutoload=true \
		-p gemName=cordial \
		-p gemVersion=1.0.0

author-%:
	docker-compose run --rm openapi-codegen author -g '$@'

rm-%: FORCE
	rm -rf '$*/${CLIENT_DIR}'

build-%: FORCE
	cd '$*' && docker-compose build

run-%: build-%
	cd '$*' && docker-compose run --rm example "$$CORDIAL_USERNAME" "$$CORDIAL_PASSWORD"

