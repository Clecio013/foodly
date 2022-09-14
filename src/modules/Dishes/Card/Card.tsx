import { Text, Box, Image } from '@chakra-ui/react'
import type { Dish } from 'types/Dish'
import Link from 'next/link'

const Card = ({ id, title, description, imageUrl }: Dish) => (
  <Link href={`/dishes/${id}`}>
    <Box>
      <Image src={imageUrl} borderRadius='2xl' marginBottom={'2'} />

      <Text fontSize="lg" fontWeight='bold' paddingBottom={'1'}>{title}</Text>
      <Text>{description}</Text>
    </Box>
  </Link>
)

export default Card
