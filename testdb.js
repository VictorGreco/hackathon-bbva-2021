require('dotenv').config()
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: 'companies'
});

// open the connection
connection.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');

    /**
     *     let query = 'CREATE TABLE basedataset (' +
            'id INT(11) NOT NULL,' +
            'cd_grupo VARCHAR(255) NOT NULL, ' +
            'cd_cliente VARCHAR(255) NOT NULL,' +
            'nivel_grupo VARCHAR(255) NOT NULL, ' +
            'fh_alta VARCHAR(255) NOT NULL, ' +
            'fh_nacimiento VARCHAR(255) NOT NULL, ' +
            'tp_sector VARCHAR(255) NOT NULL, ' +
            'cd_actividad VARCHAR(255) NOT NULL, ' +
            'cd_postal VARCHAR(255) NOT NULL, ' +
            'cd_estado VARCHAR(255) NOT NULL, ' +
            'nm_sector VARCHAR(255) NOT NULL, ' +
            'recursos VARCHAR(255) NOT NULL, ' +
            'credito VARCHAR(255) NOT NULL, ' +
            'rentabilidad VARCHAR(255) NOT NULL,' +
            'consumo_cfe_12m VARCHAR(255) NOT NULL, ' +
            'pagos_cfe_12m VARCHAR(255) NOT NULL)'
     */

            let query = `SELECT * FROM basedataset LIMIT 1`;

            connection.query(query, (error, response) => {
                console.log("Started query else process");
    
                console.log(error || response);
            });
});

