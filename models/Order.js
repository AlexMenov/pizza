
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 600,
    },
    total: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      required: true,
    },
    paymentMetod: {
      type: Number,
      required: true,
    },
  },
  { timeStamp: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);
