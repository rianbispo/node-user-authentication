import express, { NextFunction, Request, Response } from 'express';
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
const port = 3000;

// Consfigurações da Aplicação - Middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

// Configuração dos Handlers de Erros
app.use(errorHandler);

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Running on port: ${port}...`);
})
