import dbConnect from "../../../../lib/mongo.js";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        let products;
        if (id) {
          products = await Product.find({ _id: id });
        }
        res.status(200).json(products);
      } catch (e) {
        res.status(500).json(e);
      }
      break;
    case "POST":
      try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
      } catch (e) {
        res.status(500).json(e);
      }
      break;
  }
}
