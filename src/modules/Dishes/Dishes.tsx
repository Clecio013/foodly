import { Container, Heading, Text } from "@chakra-ui/react"
import Layout from "shared/components/Layout"
import List from "./List"
import type { Dishes as DishesProps } from "types/Dish"

const Dishes = ({ dishes }: DishesProps) => {
  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <Heading>Pratos deliciosos teste</Heading>
        <Text>Escolha seu prato e em seguida faça o agendamento do dia que você irá nos visitar</Text>

        <List dishes={dishes} />
      </Container>
    </Layout>
  )
}

export default Dishes
