import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
//Rota: Endereço completo da requisição;
//Recurso: Qual entidade estamos acessando do Sistema;

//Metodos:
//GET: Busca informações na requisição;
//POST: Envia informações na requisição;
//PUT: Atualiza informações na requisição;
//DELET: Apaga informações na requisição;

//Request Params: Parâmetros que são recebidos na roda para indentificar um recurso;
//Query Params: Parâmetros que vem na propria rota, filtros, paginações e etc...;
//Request Body: O corpo da requisição e criação das informações;
