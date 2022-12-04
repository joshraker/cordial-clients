default: all
all: go typescript-fetch ruby
.PHONY: default all go typescript-fetch ruby
FORCE:

ROOT_DIR=clients
TEMPLATE_DIR=templates
CUSTOM_DIR=custom
CLIENT_DIR=client

go:
	@make rm-$@
	docker-compose run --rm openapi-codegen generate -i openapi.yml -o ${ROOT_DIR}/$@/${CLIENT_DIR} -g $@ \
		-t ${TEMPLATE_DIR}/$@ \
		-p packageName=cordial \
		-p packageVersion=1.0.0
	@make inject-$@

typescript-fetch:
	@make rm-$@
	docker-compose run --rm openapi-codegen generate -i openapi.yml -o ${ROOT_DIR}/$@/${CLIENT_DIR} -g $@ \
		-t ${TEMPLATE_DIR}/$@ \
		-p typescriptThreePlus=true \
		-p npmName=cordial \
		-p npmVersion=1.0.0
	@make inject-$@

ruby:
	@make rm-$@
	docker-compose run --rm openapi-codegen generate -i openapi.yml -o ${ROOT_DIR}/$@/${CLIENT_DIR} -g $@ \
		-t ${TEMPLATE_DIR}/$@ \
		-p useAutoload=true \
		-p gemName=cordial \
		-p gemVersion=1.0.0
	@make inject-$@

inject-%: FORCE
	docker-compose run --rm scripts scripts/inject-custom/main.go ${ROOT_DIR}/$*/${CUSTOM_DIR} ${ROOT_DIR}/$*/${CLIENT_DIR}

template-%: FORCE
	docker-compose run --rm openapi-codegen author template -g $* -o .templates/$*

rm-%: FORCE
	rm -rf ${ROOT_DIR}/$*/${CLIENT_DIR}

build-%: FORCE
	cd ${ROOT_DIR}/$* && docker-compose build

run-%: build-%
	cd ${ROOT_DIR}/$* && docker-compose run --rm example "$$CORDIAL_USERNAME" "$$CORDIAL_PASSWORD"

