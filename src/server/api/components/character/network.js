const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();
const contextService = require('request-context');

// Routes
router.get('/', list)
//router.get('/page:page&limit:limit', paginatedList);
router.get('/page:page&limit:limit', secure('user'), paginatedList)

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function paginatedList(req, res, next){
    //para setear username al model character
    contextService.set('request.req.user', req.user._doc.username);

    Controller.paginatedList(req.params.page, req.params.limit, req.user._doc.username)
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

module.exports = router;