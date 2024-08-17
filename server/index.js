import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from 'morgan';
import dbConnect from './config/db.js';
import kpisRouter from './routes/kpis.js';
import productsRouter from './routes/products.js';
import transactionsRouter from './routes/transactions.js';

/* CONFIGS */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
const PORT = process.env.PORT || 9000;

/* MONGOOSE CONNECTION */
dbConnect();



/* ROUTES */
app.use("/api/kpis", kpisRouter);
app.use("/api/products", productsRouter);
app.use("/api/transactions", transactionsRouter);





app.listen(PORT, () => {
    console.log(`Server is Live on Port: ${PORT}`);
})




