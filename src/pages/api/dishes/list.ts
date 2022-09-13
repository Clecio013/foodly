import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma'
import { HttpStatus } from 'types/HttpStatus'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(HttpStatus.METHOD_NOT_ALLOWED).end()
  }

  const tasks = await prisma.dish.findMany()

  return res.status(200).json(tasks)
}
