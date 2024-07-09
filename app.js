const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
const fs = require('fs');
const ip = '34.238.75.113';

app.use(express.static(path.join(__dirname)));
app.use(cors({origin: 'http://&{ip}:${port}'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const conexion = mysql.createConnection({
    host: "dbconsulta.cj62oee20fk1.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "registro",
    user: "erikson",
    password: "%Erikson42011dias"
});

conexion.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');

});
  app.post('/submit-form', (req, res) => {
    const { nombre, apellidos, dni, email, asunto, mensaje } = req.body;
    const query = 'INSERT INTO Contactos (nombre, apellidos, dni, email, asunto, mensaje) VALUES (?, ?, ?, ?, ?, ?)';
    
    conexion.query(query, [nombre, apellidos, dni, email, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            res.status(500).send('Error interno al procesar el formulario');
            return;
        }
        
        console.log('Datos insertados correctamente en la base de datos');
        res.redirect('/index.html');
    });
  });

/*calendario*/

app.get("/api/dates/:current", (req, res) => {
  var request = req.params.current;

  conexion.query(
    'SELECT id, DATE_FORMAT(fecha, "%d/%m/%Y") AS fecha, nombre, descripcion FROM calendario WHERE fecha = ?',
    [request],
    (err, row, fields) => {
      if (row && row.length > 0) {
        // Si hay resultados, enviarlos como JSON
        console.log("Respuesta del Json: ", row[0]);
        res.json(row[0]);
      } else {
        // En caso de error o no encontrar datos, enviar null
        if (err) {
          console.log("Error al obtener los datos: ", err);
        } else {
          console.log("No se encontraron datos para la fecha:", request);
        }
        res.json(null);
      }
    }
  );
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'CASINOMESALE', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);
});
