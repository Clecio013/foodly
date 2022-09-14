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

  const dish = await prisma.dish.findUnique({
    where: {
      id: req.query.id as string
    }
  })

  return res.status(200).json(dish)
}
