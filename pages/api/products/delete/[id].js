import dbConnect from "../../../../lib/mongo.js";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  switch (method) {
    case "DELETE":
      try {
        await Product.findByIdAndDelete(id);
        res.status(200).json("deleted");
      } catch (e) {
        res.status(500).json(e);
      }
      break;
  }
}
