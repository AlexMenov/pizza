export default function handler(req, res) {
  const { method } = req;
  if (method === "DELETE") {
    res.status(201).json("пераци выполнена");
  }
}
