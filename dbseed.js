require('dotenv').config()

const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("dataset_huella_carbono.csv");
let csvData = [];

console.log("Start process");

let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    console.log("Started on process");
    csvData.push(data);
  })
  .on("end", function() {
    console.log("Started end process");

    // remove the first line: header
    csvData.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
        database: 'companies'
    });

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        console.log("Started connect else process");

        let query =
          "INSERT INTO basedataset (cd_grupo, cd_cliente, nivel_grupo, fh_alta, fh_nacimiento, tp_sector, cd_actividad, cd_postal, cd_estado, nm_sector, recursos, credito, rentabilidad, consumo_cfe_12m, pagos_cfe_12m) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

  console.log("Started last process");


stream.pipe(csvStream);

console.log("End process");
