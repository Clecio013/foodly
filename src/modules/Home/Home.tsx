import { Container, Text, Heading, Button, Box, useToast } from "@chakra-ui/react"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/router"
import Head from "next/head"

const Home = () => {
  const toast = useToast()
  const router = useRouter()

  const handleGoogleSignIn = () => {
    signIn('google')
      .then(() => router.push('/dishes'))
      .catch(() => {
        toast({
          title: 'Houve um erro ao logar 😥',
          description: "Mas não se preocupe, já fomos avisados e entraremos em contato em breve",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right'
        })
      })
  }

  return (
    <Box
      backgroundImage="url(/images/suco.jpg)"
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >
      <Head>
        <title>Foodly - Home</title>
        <meta
          name='description'
          content='Venha desfrutar uma comida deliciosa e dar risada com seus amigos!'
        />
      </Head>

      <Container
        maxW='container.lg'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        height='100vh'
      >
        <Heading paddingBottom='2' size="2xl" color='white' textShadow='lg'>Foodly</Heading>
        <Text
          paddingBottom='8'
          color='white'
          fontSize='lg'
          fontWeight='semibold'
        >
          Escolha a comida que irá comer no dia de visitar seus amigos
        </Text>

        <Button
          width='full'
          onClick={handleGoogleSignIn}
        >
          Entrar com Google
        </Button>
      </Container>
    </Box>
  )
}

export default Home
