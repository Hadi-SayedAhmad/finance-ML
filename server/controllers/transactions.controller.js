
import TRANSACTION from "../models/transacton.model.js";

export const getTransactions = async (req, res) => {
    try {
        const transactions = await TRANSACTION.find().limit(50).sort({ createdOn: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}