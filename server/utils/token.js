const jwt=require("jsonwebtoken")

const accessToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:'30s'}
    )

    return token;
}

const refreshToken=(payload)=>{
    const token=jwt.sign({
        email:payload.email,  
    },process.env.REFRESH_TOKEN_SECRET,
    {expiresIn:'1d'})
}

module.exports={accessToken,refreshToken}