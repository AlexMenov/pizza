import axios from "axios";
import Order from "../../../../models/Order";
import dbConnect from "../../../../lib/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;
  await dbConnect();
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, body, { new: true });
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
