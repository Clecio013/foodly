import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { title } = request.body

  const task = await prisma.task.create({
    data: {
      title,
      done: false
    }
  })

  return response.status(201).json(task)
}
