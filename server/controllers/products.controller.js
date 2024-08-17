
import PRODUCT from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await PRODUCT.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}