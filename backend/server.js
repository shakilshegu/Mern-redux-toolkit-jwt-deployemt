import express  from "express";
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser";
import { noFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

connectDB();


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoutes)
app.use(cookieParser())

app.get('/',(req,res) => res.send('Server is Redy '))
app.use(noFound)
app.use(errorHandler)

app.listen(port,()=> console.log(`server strating on port ${port} `))

 
