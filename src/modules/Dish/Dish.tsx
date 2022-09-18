import Layout from 'shared/components/Layout'
import {
  Heading,
  Text,
  Image,
  Container,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import api from 'services/axios'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { toastOptions } from './constants'

type DishProps = {
  id: string
  title: string
  description: string
  imageUrl: string
  userId: string
  createdAt: Date
  updatedAt: Date
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

  function onSubmit() {
    if (!appointmentDate) {
      toast(toastOptions.submit.error)
      return null
    }

    handleCreateAppointment()
  }

  function handleCreateAppointment() {
    api
      .post('/appointment/create', {
        userId: session?.user.userId,
        dishId: id,
        date: appointmentDate
      })
      .then(() => {
        toast(toastOptions.appointment.created)
        router.push(`/success/?date=${appointmentDate}`)
      })
      .catch(() => toast(toastOptions.appointment.error))
  }

  return (
    <>
      <Layout>
        <Container maxW={'container.lg'}>
          <Image
            src={imageUrl}
            width="100%"
            maxHeight="400px"
            objectFit={'cover'}
            marginBottom={4}
            borderRadius={8}
          />
          <Heading fontSize={24} paddingBottom={4}>
            {title}
          </Heading>
          <Text paddingBottom={'4'}>{description}</Text>

          <FormControl paddingBottom={'4'}>
            <FormLabel>Escolha a data que deseja agendar</FormLabel>
            <Input
              type="datetime-local"
              onChange={handleChangeDate}
              placeholder="Escolha a data que deseja agendar a visita"
            />
          </FormControl>

          <Button width={'full'} onClick={onSubmit}>
            Adicionar
          </Button>
        </Container>
      </Layout>
    </>
  )
}

export default Dish
