import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatus } from 'types/HttpStatus'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(HttpStatus.METHOD_NOT_ALLOWED).end()
  }

  const { userId, dishId, date } = req.body

  const appointment = await prisma.appointment.create({
    data: {
      userId,
      dishId,
      date
    }
  })

  return res.status(201).json(appointment)
}
