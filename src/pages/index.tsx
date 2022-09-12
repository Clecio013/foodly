import { useState } from 'react'
import api from 'services/axios'
import { Text, Input, Button, Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { Task } from '@prisma/client'

type Tasks = {
  tasks: Task[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/tasks/list')

  const tasks = data?.map((task: Task) => {
    return {
      id: task.id,
      title: task.title,
      done: task.done
    }
  })

  return {
    props: {
      tasks
    }
  }
}

const Home = ({ tasks = [] }: Tasks) => {
  console.log(tasks)
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState(tasks)

  const handleCreateTask = async () => {
    const { data } = await api.post('/tasks/create', {
      title: task
    })

    setTaskList([...taskList, data])
    setTask('')
  }

  return (
    <>
      {taskList?.map((task) => (
        <Text key={task?.id}>{task?.title}</Text>
      ))}
      <Flex padding={2}>
        <Input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <Button marginLeft={4} onClick={handleCreateTask}>
          Criar task
        </Button>
      </Flex>
    </>
  )
}

export default Home
