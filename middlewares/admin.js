//admin middleware 
const jwt = require("jsonwebtoken");

function adminMiddleware(req ,res , next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token , process.env.JWT_ADMIN_SECRET);

    if(decodedInfo){
        req.userId = decodedInfo.id;
        next()
    }else{
        res.status(403).json({
            message : "you aren ot signed in"
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware
}
