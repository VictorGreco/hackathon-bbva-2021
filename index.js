const uptime = process.uptime()

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { json, urlencoded } = require('body-parser')
const helmet = require('helmet')
const mysql = require('mysql')
const app = express()
const { handleException } = require('./helper')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(helmet())

// create a new connection to the database
const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: 'companies'
});

app.get('/status', async (req, res) => {
    try {
        res.status(200).json({
            message: 'ok',
            status: 'on',
            uptime
        })
    } catch (error) {
        handleException(res, 503, error.message)
    }
});

app.get('/company', async (req, res) => {
    try {

        console.log("Started connect else process");

        let query = "SELECT cd_cliente, nm_sector FROM basedataset";

        connection.query(query, (error, response) => {
            console.log(error || response);
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).json(response);
            }
        });

    } catch (error) {
        handleException(res, 503, error.message)
    }
})

app.get('/company/:cd_cliente', async (req, res) => {
    try {
        const { cd_cliente } = req.params;

        let query = `SELECT * FROM basedataset WHERE cd_cliente = '${cd_cliente}'`;

        connection.query(query, (error, response) => {
            console.log("Started query else process");

            console.log(error || response);
            if (error) {
                res.status(200).send(error);
            } else {
                res.status(200).json(response);
            }
        });

    } catch (error) {
        handleException(res, 503, error.message)
    }
})

app.get('*', async (req, res) => {
    try {
        res.status(404).send({ message: 'Endpoint not available' })
    } catch (error) {
        handleException(res, 503, error.message)
    }
})

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});