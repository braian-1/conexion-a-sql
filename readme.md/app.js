import express from 'express';
import { cargarCSV } from './employeeService.js';
import cors from 'cors';
import db from './db.js';


const app = express();

app.use(express.json())
app.use(cors())

//const archivo = 'empleados.csv';
//cargarCSV(archivo);

//agregar usuarios
app.post('/employee', async (req, res) => {
    const datos = req.body;
    const query = `INSERT INTO employees(name,lastname,lastname2,email,charge,city,salary,age)
    VALUES(?,?,?,?,?,?,?,?);
    `;
    const valores = [
        datos.name,
        datos.lastname,
        datos.lastname2,
        datos.email,
        datos.charge,
        datos.city,
        datos.salary,
        datos.age
    ];

    db.query(query, valores, (err, result) => {
        if (err) {
            console.error("error al insertar", err.message);
            return;
        }
        res.status(201).json({
            idEmployee: result.insertId
        });
    });
});

//endpoint uploadData
app.post('/uploadCSV', (req, res) => {
    uploadCSVBack();
    console.log("funciono");
    res.json({result: "bd actualizada"});
})

//obtener todos los clientes
app.get('/getEmployees', (req, res) => {
    const sql = 'SELECT * FROM employees;'

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener los empleados:', err);
            return res.status(500).json({ error: 'Error al obtener los empleados' });
        }
        res.json(results);
    });
});

//port
app.listen(3000, () => {
    console.log("puerto corriendo")
});