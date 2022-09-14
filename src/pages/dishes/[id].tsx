import { Dish } from '@prisma/client'
import DishModule from 'modules/Dish'
import { GetServerSideProps } from 'next'
import api from 'services/axios'

type Props = {
  dish: Dish
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params

  const dish = await api.get(`/dishes/${id}`)

  return {
    props: {
      dish: dish.data
    }
  }
}

const DishesPage = ({ dish }: Props) => {
  return <DishModule {...dish} />
}

export default DishesPage
