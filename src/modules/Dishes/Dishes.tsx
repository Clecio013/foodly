import { Container, Heading, Text } from "@chakra-ui/react"
import Layout from "shared/components/Layout"

const Dishes = () => {
  return (
    <Layout>
      <Container maxWidth='container.lg'>
        <Heading>Pratos deliciosos</Heading>
        <Text>Escolha seu prato e em seguida faça o agendamento do dia que você irá nos visitar</Text>
      </Container>
    </Layout>
  )
}

export default Dishes
