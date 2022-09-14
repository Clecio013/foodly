import type { Dish } from 'types/Dish'
import DishModule from 'modules/Dish'
import { GetServerSideProps } from 'next'
import api from 'services/axios'

type Props = {
  dish: Dish
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const dish = await api.get(`/dishes/${params?.id}`)

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
