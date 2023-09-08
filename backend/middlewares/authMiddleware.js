const jwt = require('jsonwebtoken');
const { JWT_KEY_SECRET } = process.env;

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if(!token){
        return res.status(400).json({
            error: "Token no proporcionado"
        })
    }

    jwt.verify(token, JWT_KEY_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).json({error: "Token Invalido"})
        }

        req.user = decoded

        next()
    })
}

const checkUserRole = (rol) => {
    return (req, res, next) => {
        const userRole = req.user && req.user.rol

        if(!userRole || !rol.includes(userRole)){
            return res.status(403).json({
                error: "Acesso no autorizado"
            })
        }

        next()
    }
}

module.exports = {
    verifyToken,
    checkUserRole
}