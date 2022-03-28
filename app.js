import express from 'express'
import config from './config'
const app = express()

import productsRouter from './routes/products.routes'

//setting
app.set('port', config.port)

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(productsRouter)
export default app
