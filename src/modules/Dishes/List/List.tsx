import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import type { Dishes } from 'types/Dish'
import Card from '../Card'

const List = ({ dishes }: Dishes) => {
  const gridVariant = useBreakpointValue({
    base: 1,
    md: 2
  })

  return (
    <SimpleGrid columns={gridVariant} spacing={10} paddingTop={8}>
      {dishes?.map(dish => (
        <Card key={dish.id} {...dish} />
      ))}
    </SimpleGrid>
  )
}

export default List
