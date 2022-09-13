import { Text, Box, Image } from '@chakra-ui/react'
import type { Dish } from '@prisma/client'

const Card = ({ title, description, imageUrl }: Dish) => {
  return (
    <Box>
      <Image src={imageUrl} borderRadius='2xl' marginBottom={'2'} />

      <Text fontSize="lg" fontWeight='bold' paddingBottom={'1'}>{title}</Text>
      <Text>{description}</Text>
    </Box>
  )
}

export default Card
