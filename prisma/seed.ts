import { PrismaClient } from '@prisma/client'

import users from '~/prisma/seed_data/users.json'
import pointEvents from '~/prisma/seed_data/pointevents.json'

const prisma = new PrismaClient()
async function main () {
  const formattedUsers = users.map((user) => {
    return {
      id: user._id.$oid,
      email: user.email,
      firstName: user.name.first,
      lastName: user.name.last,
      password: user.password,
      type: user.type.toUpperCase(),
      address: user.address,
      phone: user.phone,
      city: user.city,
      postalCode: user.postalCode,
      createdAt: user.createdAt.$date,
      updatedAt: user.updatedAt.$date

    }
  })
  const formattedPointEvents = pointEvents.map((pointEvent) => {
    return {
      id: pointEvent._id.$oid,
      userId: pointEvent.user.$oid,
      points: pointEvent.points,
      info: pointEvent.info,
      createdAt: pointEvent.createdAt.$date
    }
  })

  await prisma.user.createMany({
    data: formattedUsers,
    skipDuplicates: true
  })

  await prisma.pointEvent.createMany({
    data: formattedPointEvents,
    skipDuplicates: true
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
