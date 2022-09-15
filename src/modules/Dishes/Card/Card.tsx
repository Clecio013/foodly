import { Text, Box, Image } from '@chakra-ui/react'
import type { Dish } from '@prisma/client'
import Link from 'next/link'

type Props = Pick<Dish, 'id' | 'title' | 'description' | 'imageUrl'>

const Card = ({ id, title, description, imageUrl }: Props) => (
  <Link href={`/dishes/${id}`}>
    <Box>
      <Image src={imageUrl} borderRadius='2xl' marginBottom={'2'} />

      <Text fontSize="lg" fontWeight='bold' paddingBottom={'1'}>{title}</Text>
      <Text>{description}</Text>
    </Box>
  </Link>
)

export default Card
