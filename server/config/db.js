import mongoose from "mongoose";
import dotenv from 'dotenv';
// import KPI from "../models/kpi.model.js";
// import PRODUCT from "../models/product.model.js"
// import TRANSACTION from "../models/transacton.model.js"
// import { kpis, products, transactions } from "../data/data.js";
dotenv.config();

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully!");

        /* SEED */
        // await mongoose.connection.dropDatabase();
        // await KPI.insertMany(kpis);
        // await PRODUCT.insertMany(products);
        // await TRANSACTION.insertMany(transactions);
    } catch (error) {
        console.log(`Database Connection Error: ${error.message}!`);
        process.exit(1);
    }
}




export default dbConnect;
