import { PrismaClient } from '@prisma/client'

import { VALID_POINT_DURATION } from '~/server/utils/constants'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const queryParams = getQuery(event)
  const sort = queryParams.sort
  const sortBy = queryParams.sort_by
  const page = Number(queryParams.page) || 0

  enum SortingKeys {
    firstName,
    score,
    totalPoints,
  }

  const sortByKey = Object.values(SortingKeys).includes(String(sortBy)) && String(sortBy)

  const take = 20
  const skip = Number(page) <= 0 ? 0 : (Number(page) - 1) * take

  let users = await prisma.user.findMany({
    where: { type: 'FREELANCER' },
    skip,
    take,
    select: {
      id: true,
      type: true,
      firstName: true,
      lastName: true,
      pointEvents: {
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          info: true,
          points: true,
          createdAt: true
        }
      }
    }
  })

  users = users.map((user) => {
    let score = 0
    let totalPoints = 0
    user.pointEvents.forEach((pointEvent) => {
      const today = new Date()
      const validFromDate = today
      validFromDate.setDate(validFromDate.getDate() - VALID_POINT_DURATION)

      if (new Date(pointEvent.createdAt) > validFromDate) {
        score += pointEvent.points
      }

      totalPoints += pointEvent.points
    })

    user.score = score
    user.totalPoints = totalPoints

    return user
  })

  users.sort((a, b) => {
    if (sort === 'asc') {
      return a[sortByKey] < b[sortByKey] ? -1 : 0
    } else if (sort === 'desc') {
      return a[sortByKey] > b[sortByKey] ? -1 : 0
    }
  })

  return { users }
})
