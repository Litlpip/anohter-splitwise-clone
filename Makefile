# VibeSplit PWA Makefile
.PHONY: help build dev test deploy-local deploy-staging deploy-prod clean health rollback logs

# Цвета для вывода
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color

# Генерация клиента
generate-client: ## Генерация TypeScript клиента из OpenAPI спецификации
	@echo "$(YELLOW)📊 Генерация клиента...$(NC)"
	docker run --rm \
      -v ${PWD}:/local openapitools/openapi-generator-cli generate \
      -i http://46.191.173.6:7654/api/swagger/v1/swagger.json \
      -g typescript-axios  \
      -o /local/src/api/generated \
      --additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api


# По умолчанию показываем help
.DEFAULT_GOAL := help