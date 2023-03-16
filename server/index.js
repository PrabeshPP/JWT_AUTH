const express=require("express")
const cookieParser=require("cookie-parser")
const cors=require("cors");

const app=express()
const authRoute=require("./routes/auth");
const secretRoute=require("./routes/secret");


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
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));


app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/api/user',authRoute)
app.use('/secret-page',secretRoute)

async function main(){
    await connectDb()
    app.listen(3001,()=>{
        console.log("Server running at Port 3001")
    })
}

main()