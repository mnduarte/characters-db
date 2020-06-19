const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch(action) {
            case 'user':
                //console.log(req.headers.authorization)         
                if (req.headers.authorization !== 'null') {
                    auth.check.logged(req)
                }
                next();
                break;
                
                
            default:
                next();
        }
    }

    return middleware;
}