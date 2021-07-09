const mysqli = require('mysqli')

let conn = new mysqli({
    host: 'localhost',
    post: 3306,
    user:'root',
    password:'',
    db: 'mega_shop'
})

let db = conn.emit(false, '')

module.exports = {
    database: db
}