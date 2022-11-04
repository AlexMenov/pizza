import axios from "axios";
import Order from "../../../../models/Order";
import dbConnect from "../../../../lib/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();
  if (method === "DELETE") {
    try {
      const order = await Order.findByIdAndDelete(id);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}