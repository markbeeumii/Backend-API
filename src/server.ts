import express,{Request, Response, Router} from 'express'
import {config} from 'dotenv'
import router from './route/route'

config()
const port = Number(process.env.SERVER_PORT) || 1212
const app = express()

app.use(express.json())
app.use(router)

//Get 
router.get('/' , (req : Request, res : Response)=>{
    return res.send(`<h1>Hello API with NodeJS by Mark !!!</h1>`)
})

//Throw Error
app.use((req : Request,res: Response)=>{
    const error = new Error(`Sorry Not Found`)
    //console.log(`${error}`)
    return res.status(404).send(` ${error}`)
})

//Listen port
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})


