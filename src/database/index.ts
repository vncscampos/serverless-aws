import knex from "knex";

const connection = knex({
  client: "mysql",
  connection: {
    host: "serverless-rds.ce7twaystibo.sa-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "",
    database: "app",
  },
});

export default connection;