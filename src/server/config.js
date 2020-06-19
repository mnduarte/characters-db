module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mongo: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'dragonball',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || '',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'dragonball',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
}