const mongoose = require('mongoose');
const config = require('../config');
const dbconf = `mongodb://${config.mongo.host}/${config.mongo.database}`;

async function handleCon() {
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.connect(dbconf, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });
    mongoose.connection.on('connected', function(){
        console.log("DB Mongo Connected ");
    });
    mongoose.connection.on('error', function(err){
        console.error('[db err]', err);
    });

    mongoose.connection.on('disconnected', function(){
        console.log("DB Mongo Disconnected");
    });
}

handleCon(); 

function list(model) {
    return model.find()
}

function countDocument(model) {
    return model.countDocuments().exec()
}

function paginatedList(model, limit, startIndex) {
    return model.find().limit(limit).skip(startIndex).exec()
}

async function validateNew(model, data) {
    // validate
    if (await model.findOne(data)) {
        return false
    }
    return true
}

async function insert(model, nameCollection, data) {
    const newData = new model(data);
    const result = await newData.save();
    return result
}

function update(model, data) {
    return
}

//async function upsert(table, data, newUser = false) {
function upsert(model, nameCollection, data, newAction = false) {

    //const row = await get(table, data.id);
    if (newAction) {
        console.log('Inserta')
        return insert(model, nameCollection, data);
    } else {
        console.log('Actualiza')
        return update(model, nameCollection, data);
    }
}

async function query(model, params) {
    return await model.findOne(params);
}


module.exports = {
    list,
    countDocument,
    paginatedList,
    validateNew,
    upsert,
    query
};

