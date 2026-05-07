import express from 'express'
import { router } from './routes/ai.routes.js'
import cros from 'cors'

export const app = express()

app.use(cros({
    origin:"*"
}))


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', router) 

