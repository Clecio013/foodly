import Home from 'modules/Home'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/dishes',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

const HomePage = () => <Home />

export default HomePage
