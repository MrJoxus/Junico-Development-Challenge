import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const pointEvents = await prisma.pointEvent.findMany({
    where: { userId: id },
    select: {
      id: true,
      info: true,
      points: true,
      createdAt: true
    }
  })
  return {
    pointEvents
  }
})
