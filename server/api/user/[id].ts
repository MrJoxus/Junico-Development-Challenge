import { PrismaClient } from '@prisma/client'

import { VALID_POINT_DURATION } from '~/server/utils/constants'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const user = await prisma.user.findFirst({
    where: { id, type: 'FREELANCER' },
    select: {
      id: true,
      type: true,
      firstName: true,
      lastName: true,
      pointEvents: {
        orderBy: {
          createdAt: 'desc'
        },
        take: 1,
        select: {
          info: true,
          points: true,
          createdAt: true
        }
      }
    }
  })

  const comparisonDate = new Date()
  comparisonDate.setDate(comparisonDate.getDate() - VALID_POINT_DURATION)

  const aggregatedPoints = await prisma.pointEvent.aggregate({
    _sum: {
      points: true
    },
    where: {
      userId: id,
      createdAt: {
        gt: comparisonDate
      }
    }

  })

  return { user: { ...user, score: aggregatedPoints._sum.points } }
})
