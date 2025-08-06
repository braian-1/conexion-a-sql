import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'riwi'
});

db.connect(err => {
    if(err){
        console.error("Error al conectar al mysql", err);
        return;
    }
    console.log("Conectado a la DB");
});

export default db;