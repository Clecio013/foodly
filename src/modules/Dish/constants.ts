import { ToastProps } from 'types/Toast'

const appointmentMessages: ToastProps = {
  created: {
    title: 'Oba, o agendamento foi feito com sucesso',
    description:
      'Entraremos em contato em breve para bater um papo sobre o agendamento',
    status: 'success',
    duration: 9000,
    isClosable: true,
    position: 'top-right'
  },
  error: {
    title: 'Houve um erro fazer o agendamento',
    description:
      'Mas não se preocupe, já fomos avisados e entraremos em contato em breve',
    status: 'error',
    duration: 9000,
    isClosable: true,
    position: 'top-right'
  }
}

const submitMessages: ToastProps = {
  error: {
    title: 'Aconteceu um erro',
    description: 'Você precisa escolher uma data e horário para continuar',
    status: 'error',
    duration: 9000,
    isClosable: true,
    position: 'top-right'
  }
}

export const toastOptions = {
  appointment: appointmentMessages,
  submit: submitMessages
}
