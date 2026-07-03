
const jwt =  require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
             message: "Token Missing"
        })
    }
     try {

        const verify = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = verify;
        next();
        
     } catch (error) {
        res.status(401).json({
            message: "Invalid Token"
        });
     }
}

module.exports = verifyToken