const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const app=express()
const port=process.env.PORT || 8000
const DB=process.env.DB_URL

mongoose.connect(DB).then(connected=>{
    console.log(`Connected to Database`)
}).catch(error=>{
    console.log(error)
})


app.get('/',(req, res)=>{

    res.send('OK')    
})
app.listen(port,()=>{
    console.log(`Server Running at port ${port}`)
})