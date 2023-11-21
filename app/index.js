import dotenv from 'dotenv';
import express from 'express';
import Ingreso from './Routers/Ingreso.js';
import Preview from './Routers/preview.js';
import Register from './Routers/register.js';

console.clear();
dotenv.config();
let Express = express();

Express.use(express.json());
Express.use("/login",Ingreso)
Express.use("/preview", Preview)
Express.use("/register",Register)
 

const config =JSON.parse(process.env.servidor_backend)
Express.listen(config,()=>{
    console.clear();
    console.log(`URL de conexion:`)
    console.log(`http://${config.hostname}:${config.port}`);
});