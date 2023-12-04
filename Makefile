prisma-migrate:
	docker compose exec nuxt yarn prisma-migrate

prisma-generate:
	docker compose exec nuxt yarn prisma-generate

prisma-studio:
	docker compose exec nuxt yarn prisma-studio

prisma-seed:
	docker compose exec nuxt yarn prisma-seed
