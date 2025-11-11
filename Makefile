# VibeSplit PWA Makefile
.PHONY: help build dev test deploy-local deploy-staging deploy-prod clean health rollback logs docker-build docker-run docker-stop docker-clean docker-logs docker-restart generate-client

# Цвета для вывода
GREEN = \033[0;32m
YELLOW = \033[1;33m
RED = \033[0;31m
NC = \033[0m # No Color


# Docker команды
IMAGE_NAME = splitwise-app
CONTAINER_NAME = splitwise
PORT = 8080

# Генерация клиента
generate-client: ## Генерация TypeScript клиента из OpenAPI спецификации
	@echo "$(YELLOW)📊 Генерация клиента...$(NC)"
	docker run --rm \
      -v ${PWD}:/local openapitools/openapi-generator-cli generate \
      -i http://46.191.173.6:7654/api/swagger/v1/swagger.json \
      -g typescript-axios  \
      -o /local/src/api/generated \
      --additional-properties=withSeparateModelsAndApi=true,modelPackage=models,apiPackage=api

docker-build: ## Сборка Docker образа
	@echo "$(YELLOW)🐳 Сборка Docker образа...$(NC)"
	docker build -t $(IMAGE_NAME) .
	@echo "$(GREEN)✅ Образ $(IMAGE_NAME) успешно собран$(NC)"

docker-run: ## Запуск приложения в Docker контейнере
	@echo "$(YELLOW)🚀 Запуск контейнера...$(NC)"
	docker run -d -p $(PORT):80 --name $(CONTAINER_NAME) $(IMAGE_NAME)
	@echo "$(GREEN)✅ Приложение запущено на http://localhost:$(PORT)$(NC)"

docker-stop: ## Остановка и удаление контейнера
	@echo "$(YELLOW)⏹️  Остановка контейнера...$(NC)"
	-docker stop $(CONTAINER_NAME)
	-docker rm $(CONTAINER_NAME)
	@echo "$(GREEN)✅ Контейнер остановлен$(NC)"

docker-clean: docker-stop ## Удаление контейнера и образа
	@echo "$(YELLOW)🧹 Удаление образа...$(NC)"
	-docker rmi $(IMAGE_NAME)
	@echo "$(GREEN)✅ Образ удален$(NC)"

docker-logs: ## Просмотр логов контейнера
	@echo "$(YELLOW)📋 Логи контейнера $(CONTAINER_NAME):$(NC)"
	docker logs -f $(CONTAINER_NAME)

docker-restart: docker-stop docker-run ## Перезапуск контейнера

# По умолчанию показываем help
.DEFAULT_GOAL := help