import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatus } from 'types/HttpStatus'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'GET') {
    return response.status(HttpStatus.METHOD_NOT_ALLOWED).end()
  }

  const tasks = await prisma.task.findMany()

  return response.status(200).json(tasks)
}
