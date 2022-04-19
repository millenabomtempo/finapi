const express = require('express')

const app = express()

app.use(express.json())

app.get('/courses', (request, response) => {
  return response.json([
    "Curso 01",
    "Curso 02",
    "Curso 03",
  ])
})

app.post('/courses', (request, response) => {
  return response.json([
    "Curso 01",
    "Curso 02",
    "Curso 03",
    "Curso 04",
    "Curso 05",
  ])
})

app.put('/courses/:id', (request, response) => {
  return response.json([
    "Curso 06",
    "Curso 02",
    "Curso 03",
    "Curso 04",
    "Curso 05",
  ])
})

app.patch('/courses/:id', (request, response) => {
  return response.json([
    "Curso 06",
    "Curso 02",
    "Curso 03",
    "Curso 04",
    "Curso 05",
  ])
})

app.delete('/courses/:id', (request, response) => {
  return response.json([
    "Curso 06",
    "Curso 02",
    "Curso 04",
    "Curso 05",
  ])
})

app.listen(3333)