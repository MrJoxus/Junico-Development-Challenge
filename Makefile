prisma-migrate:
	docker compose exec frontend yarn prisma-migrate

prisma-generate:
	docker compose exec frontend yarn prisma-generate

prisma-studio:
	docker compose exec frontend yarn prisma-studio

prisma-seed:
	docker compose exec frontend yarn prisma-seed
