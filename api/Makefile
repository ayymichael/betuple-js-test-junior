JS_TEST_API_PROJECT ?= js-test-api-project
JS_TEST_API_IMAGE_VERSION ?= 0.0.1
JS_TEST_API_IMAGE_NAME ?= js-test-api
JS_TEST_DB_NAME ?= jstestdb
JS_TEST_DB_USERNAME ?= jstestdb
JS_TEST_DB_PASSWORD ?= jstestdbpwd
JS_TEST_DB_PORT ?= 5432
JS_TEST_DB_HOST ?= js-test-db
JS_TEST_PROXY_NETWORK ?= "proxy-network-js-test"

.PHONY: run
run:
	- docker network create $(JS_TEST_PROXY_NETWORK)
	sleep 1
	APP_IMAGE_VERSION=$(JS_TEST_API_IMAGE_VERSION) \
    APP_IMAGE_NAME=$(JS_TEST_API_IMAGE_NAME) \
    APP_PROXY_NETWORK=$(JS_TEST_PROXY_NETWORK) \
    APP_DB_USERNAME=$(JS_TEST_DB_USERNAME) \
    APP_DB_NAME=$(JS_TEST_DB_NAME) \
    APP_DB_PASSWORD=$(JS_TEST_DB_PASSWORD) \
    APP_DB_PORT=$(JS_TEST_DB_PORT) \
    APP_DB_HOST=$(JS_TEST_DB_HOST) \
    docker-compose -p $(JS_TEST_API_PROJECT) -f docker-compose.yaml up -d

.PHONY: build
build:
	docker build -t $(JS_TEST_API_IMAGE_NAME):$(JS_TEST_API_IMAGE_VERSION) -f Dockerfile .

.PHONY: push
push:
	docker push $(JS_TEST_API_IMAGE_NAME):$(JS_TEST_API_IMAGE_VERSION)

.PHONY: down
down:
	- docker network create $(JS_TEST_PROXY_NETWORK)
	sleep 1
	APP_IMAGE_VERSION=$(JS_TEST_API_IMAGE_VERSION) \
    APP_IMAGE_NAME=$(JS_TEST_API_IMAGE_NAME) \
    APP_PROXY_NETWORK=$(JS_TEST_PROXY_NETWORK) \
	docker-compose -p $(JS_TEST_API_PROJECT) -f docker-compose.yaml down

