import mysql from 'mysql';

export const resolvers = {
  Query: {
    users: async () => {
        const connection = mysql.createConnection({
            host: 'serverless-rds.ce7twaystibo.sa-east-1.rds.amazonaws.com',
            port: 3306,
            user: 'admin',
            password: '',
            database: 'app'
        });

        const p = new Promise((resolve) => {
            connection.query('SELECT * FROM users', (err:any, results:any) => {
                resolve(results);
            })
        });

        const result = await p;

        console.log(result);

        const user = {
            name: 'Vinicius',
            email: 'email@com.br',
            password: '123'
        }

        return user
    },
  },
};
