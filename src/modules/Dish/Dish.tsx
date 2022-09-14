import Layout from "shared/components/Layout"
import { Heading, Text, Image, Container, Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import api from "services/axios"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router"

type DishProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const Dish = ({ title, description, imageUrl, id }: DishProps) => {
  const { data: session } = useSession()
  const [appointmentDate, setAppointmentDate] = useState('')
  const toast = useToast()
  const router = useRouter()

  function handleChangeDate(event: ChangeEvent<HTMLInputElement>) {
    const date = event.target.value
    const isoDate = new Date(date).toISOString()

    setAppointmentDate(isoDate)
  }

  function handleCreateAppointment() {
    api.post('/appointment/create', {
      userId: session?.user.userId,
      dishId: id,
      date: appointmentDate
    })
      .then(() => {
        toast({
          title: 'Oba, o agendamento foi feito com sucesso',
          description: "Entraremos em contato em breve para bater um papo sobre o agendamento",
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
        router.push(`success/?date=${appointmentDate}`)
      })
      .catch(() => {
        toast({
          title: 'Houve um erro fazer o agendamento',
          description: "Mas não se preocupe, já fomos avisados e entraremos em contato em breve",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      })
  }

  return (
    <>
      <Layout>
        <Container maxW={'container.lg'}>
          <Image src={imageUrl}  width='100%' maxHeight='400px' bgSize={'cover'}/>
          <Heading>{title}</Heading>
          <Text paddingBottom={'4'}>{description}</Text>

          <FormControl paddingBottom={'4'}>
            <FormLabel>Escolha a data que deseja agendar</FormLabel>
            <Input type='date' onChange={handleChangeDate} />
          </FormControl>

          <Button width={'full'} onClick={handleCreateAppointment}>Adicionar</Button>
        </Container>
      </Layout>
    </>
  )
}

export default Dish
