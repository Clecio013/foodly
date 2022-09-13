import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tasks = await prisma.dish.findMany()

  return res.status(200).json(tasks)
}
