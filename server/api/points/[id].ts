import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  let pointEvents = await prisma.pointEvent.findMany({
    where: { userId: id, user: { type: 'FREELANCER' } },
    select: {
      id: true,
      info: true,
      points: true,
      createdAt: true,
      user: {
        select: {
          type: true
        }
      }
    }
  })

  pointEvents = pointEvents.map((pointEvent) => {
    const today = new Date()
    const validFromDate = today
    let valid = false
    validFromDate.setDate(validFromDate.getDate() - VALID_POINT_DURATION)

    if (new Date(pointEvent.createdAt) > validFromDate) {
      valid = true
    }

    pointEvent.valid = valid
    return pointEvent
  })

  return {
    pointEvents
  }
})
