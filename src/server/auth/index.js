const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret)//Token Limpio, Variable de entorno de config
}

const check = {    
    own: function(req, owner) {
        const decoded = decodeHeader(req);//Decodifica el Header
        //console.log(req);
        //console.log(decoded.id);
        //console.log(owner);

        if (decoded.id !== owner) {
            //throw new Error('No puedes hacer esto');
            throw error('No puedes hacer esto', 401);
        }
    },    

    logged: function(req, owner) {
        const decoded = decodeHeader(req);
    },
}

function getToken(auth) {
    if (!auth) {
        throw error('No viene token', 401);
    }

    /*if (auth.indexOf('Bearer ') === -1) {//Dentro de auth debebia contener Bearer
        throw error('Formato invalido', 401);
    }*/

    //Reemplaza Bearer para dejar limpio el token
    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || ''; //Obtiene Token del Header
    
    
    console.log('....')
    console.log(authorization)    
    console.log('....')

    const token = getToken(authorization);//Limpia el token
    const decoded = verify(token);//Verifica con la variable de entorno

    /*console.log(authorization)
    
    console.log('....')
    console.log(token)
    
    console.log('....')
    console.log(decoded)
    
    console.log('....')*/

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};