import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  const tasks = await prisma.task.findMany()

  return response.status(200).json(tasks)
}
