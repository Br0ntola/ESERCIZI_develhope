import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import {getAll, getOneById, create, upadateById, deleteById} from './controllers/planets.js'

const app = express()
dotenv.config()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(express.json())

//GET
app.get('/api/planets', getAll);

app.get('/api/planets/:id', getOneById);

//POST
app.post('/api/planets', create)

//Update: PUT
app.put('/api/planets/:id', upadateById);

//DELETE
app.delete('/api/planets/:id', deleteById);

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
});
