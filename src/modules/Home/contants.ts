import { ToastProps } from 'types/Toast'

const signinMessages: ToastProps = {
  error: {
    title: 'Houve um erro ao logar 😥',
    description:
      'Mas não se preocupe, já fomos avisados e entraremos em contato em breve',
    status: 'error',
    duration: 9000,
    isClosable: true,
    position: 'top-right'
  }
}

export const toastOptions = {
  signin: signinMessages
}
