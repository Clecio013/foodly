import DishesModule from 'modules/Dishes'
import type { GetServerSideProps } from 'next'
import axios from 'services/axios'
import type { Dishes } from 'types/Dish'

export const getServerSideProps: GetServerSideProps = async () => {
  const dishes = await axios.get('/dishes/list')

  return {
    props: {
      dishes: dishes.data
    }
  }
}

const DishesPage = ({ dishes }: Dishes) => {
  return <DishesModule dishes={dishes} />
}

export default DishesPage
