import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { router as loginRouter } from './routes/login'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['laskdjf'] }))
app.use(loginRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
