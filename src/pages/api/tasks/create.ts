import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatus } from 'types/HttpStatus'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'POST') {
    return response.status(HttpStatus.METHOD_NOT_ALLOWED).end()
  }

  const { title } = request.body

  const task = await prisma.task.create({
    data: {
      title,
      done: false
    }
  })

  return response.status(201).json(task)
}
