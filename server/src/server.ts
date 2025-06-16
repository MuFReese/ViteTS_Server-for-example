import express from 'express'
import cors from 'cors'
import router from './routes/form.routes'
import pool from './db'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: ['http://localhost:5173', 'http://example.com'], // Разрешенные домены
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные HTTP методы
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
  optionsSuccessStatus: 200 // Статус успеха для предварительных запросов
}))
app.use(express.json())

app.use('/api', router)

pool.connect()
  .then( () => console.log('Connected DB'))
  .catch( err => console.error('DB connection error', err))


app.listen( PORT, () => {
  console.log(`Server run in the http://localhost:${PORT}`)
})