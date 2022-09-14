import { Container, Heading, Text, Button, Box } from '@chakra-ui/react'
import Layout from 'shared/components/Layout'
import SuccessImage from 'assets/success.svg'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Success = () => {
  const { query } = useRouter()

  const getAppointmentDate = () => {
    if (!query.date) return null
    const date = new Date(query?.date as string)

    const ptDate = new Intl.DateTimeFormat('pt-BR').format(date)
    const ptHour = `${date.getHours().toString().padStart(2, '0')}h${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}min`

    return {
      date: ptDate,
      hour: ptHour
    }
  }

  console.log(getAppointmentDate())

  return (
    <Layout>
      <Container maxW={'container.lg'}>
        <Heading>Compromisso agendado</Heading>
        <Text>
          Seu compromisso foi agendado para o dia {getAppointmentDate()?.date},
          às {getAppointmentDate()?.hour}.
        </Text>
        <Text paddingBottom={'8'}>Agora é só aguardar e curtir o dia.</Text>

        <Box maxWidth="400px">
          <SuccessImage />
        </Box>

        <Button
          width="full"
          marginTop={12}
          marginBottom={8}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Finalizar
        </Button>
      </Container>
    </Layout>
  )
}

export default Success
