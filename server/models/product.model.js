import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const Schema = new mongoose.Schema({
    price: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      expense: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
      },
      transactions: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Transaction",
        },
      ],
},
{ timestamps: true, toJSON: { getters: true } }
)

const PRODUCT = mongoose.model("Product", Schema);

export default PRODUCT;