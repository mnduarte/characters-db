const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.post('/', upsert);

// Internal functions
function upsert(req, res, next) {
    //console.log('Viene a upsert')
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}

module.exports = router;