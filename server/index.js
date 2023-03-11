const express=require("express")
const cookieParser=require("cookie-parser")

const app=express()
const authRoute=require("./routes/auth")


require('dotenv').config()

const mongoose=require("mongoose")

async function connectDb(){
    try{
        
        const result=await mongoose.connect(`${process.env.DB_URL}`)
        if(result){
            console.log("Connection Established Successfully!")
        }else{
            throw new Error("Something Went Wrong!")
        }
    }catch(err){
        console.log("Oops!Looks Like Something Went Wrong")
    }
}

app.use(express.json())
app.use(cookieParser())

app.use('/api/user',authRoute)

async function main(){
    await connectDb()
    app.listen(3001,()=>{
        console.log("Server running at Port 3000")
    })
}

main()