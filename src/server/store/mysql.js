const mysql = require('mysql');

const config = require('../config');

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

function handleCon() {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}

handleCon();


function listUser(idUserFrom) {
    return new Promise( (resolve, reject) => {
        connection.query(`
        SELECT
            piuser.id,
            piuser.username,
            piuser.firstname,
            piuser.lastname,
            piuser.email,
            piuser.jobtitle,
            piuser.avatarurl,	
            CASE WHEN (SELECT COUNT(user_to) 
                        FROM user_follow piuserfollow 
                        WHERE piuserfollow.user_to = piuser.id
                        AND piuserfollow.user_from = '${idUserFrom}') > 0
                THEN 1
                ELSE 0
            END as  following_user
        FROM
            user piuser
        `, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}


function list(table) {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function get(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id='${id}'`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function remove(table, params) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE ${params}`, (err, result) => {
            console.log('remueve')
            if (err) return reject(err);
            resolve(result);
        })
    })
}

//async function upsert(table, data, newUser = false) {
function upsert(table, data, newAction = false) {
    
    //const row = await get(table, data.id);
    if (newAction) {
        console.log('Inserta')
        return insert(table, data);
    } else {
        console.log('Actualiza')
        return update(table, data);
    }
}

function query(table, query, join) {
    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    //`user_from= 'gXqYhF3UVeozb2_k5ysCE' AND  user_to= '-68feeIOzzqWCqZIwTjcO'`

    

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${query}`, (err, res) => {
            /*console.log(query);
            console.log(err)
            console.log(res)
            console.log('.....')*/
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}


module.exports = {
    listUser,
    list,
    get,
    remove,
    upsert,
    query
};