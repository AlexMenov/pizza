
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desсription: {
      type: String,
      required: true,
      maxlength: 600,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: [
      {
        text: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timeStamp: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
