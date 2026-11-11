import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';


const app = express();
const PORT = 3000;

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mydatabase'
}

app.use(express.json());
app.use(cors());

app.post('/salvar-agendamento', async (req, res) => {
    const{nome, procedimeno,dia,horario} = req.body;
    let connection;
    try {
        conection = await mysql.createConnection(dbConfig);
        console.log('Conectado ao banco mysql')

        const insertQuery = 'INSERT INTO agendamentos (nome, procedimeno, dia, horario) VALUES (?, ?, ?, ?)';

        const [result] = await connection.execute(insertQuery, [nome, procedimeno, dia, horario]);
        const mensagem = ' Ola ${nome}, seu agendamento foi realizado de ${procedimento} com sucesso para o dia ${dia} no horário ${horario}.';

    } catch (error) {
        console.error('Erro ao salvar agendamento:', error);
        res.status(500).json({ error: 'Erro ao salvar agendamento' });
    }finally {
        if (connection) {
            await connection.end();
        }
    }
})   
