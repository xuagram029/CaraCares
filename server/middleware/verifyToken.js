const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if(!token){ 
        return res.status(401).json({message: "You are not authenticated"})
    }
    
    try {
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = user
        next()
    } catch (err) {
        return res.status(403).json({message: "Token not valid"})
    }
}


const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () =>{
        if(req.user.id === parseInt(req.params.id) && req.user.role === "admin"){
            next()
        }else{
            return res.status(403).json({message: "You are not authorized"})
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () =>{
        console.log(req.user)
        console.log(req.user.id)
        console.log(req.params.id)
        if(req.user.role === "admin"){
            next()
        }else{
            return res.status(403).json({message: "You are authorized"})
        }
    })
}

module.exports = {verifyToken, verifyUser, verifyAdmin}