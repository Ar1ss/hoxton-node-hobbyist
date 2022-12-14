import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()

const port = 3456

//users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({ include: { hobby: true } })
  res.send(users)
})

app.get('/users/:id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
    include: { hobby: true },
  })
  if (user) {
    res.send(user)
  } else res.status(404).send({ error: 'User not found' })
})

app.post('/users', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
    include: { hobby: true }
  })
  res.send(user)
})

app.delete('/users/:id', async (req, res) => {
  const user = await prisma.user.delete({
    where: { id: Number(req.params.id) }
  })
  res.send(user)
})

app.patch('/users/:id', async (req, res) => {
  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: req.body,
    include: { hobby: true }
  })
  res.send(user)
})

//hobbies
app.get('/hobbies', async (req, res) => {
  const hobbies = await prisma.hobby.findMany({ include: { user: true } })
  res.send(hobbies)
})

app.get('/hobbies/:id', async (req, res) => {
  const hobby = await prisma.hobby.findUnique({
    where: { id: Number(req.params.id) },
    include: { user: true }
  })
  if (hobby) {
    res.send(hobby)
  } else {
    res.status(404).send({ error: 'Hobby not found' })
  }
})

app.post('/hobbies', async (req, res) => {
  const hobby = await prisma.hobby.create({
    data: req.body,
    include: { user: true }
  })
  res.send(hobby)
})

app.delete('/hobbies/:id', async (req, res) => {
  const hobby = await prisma.hobby.delete({
    where: { id: Number(req.params.id) }
  })
  res.send(hobby)
})

app.patch('/hobbies/:id', async (req, res) => {
  const hobby = await prisma.hobby.update({
    where: { id: Number(req.params.id) },
    data: req.body,
    include: { user: true }
  })
  res.send(hobby)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
 
//UsersAndHobbies

app.get ('/usersAndHobbies', async (req, res) => {
    const usersAndHobbies = await prisma.user.findMany({
        include: { hobby: true }
    })
    res.send(usersAndHobbies)
    })
    