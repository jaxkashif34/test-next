const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  console.log("Request received");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Add a custom route to push data into 'products'
// server.post("/products", (req, res) => {
//   const db = router.db; // Get access to lowdb instance
//   const newProduct = req.body;

//   console.log("🚀 ~ server.post ~ newProduct:", newProduct);

//   try {
//     const products = db.get("products").value(); // Retrieve existing products
//     console.log("🚀 ~ server.post ~ products:", products)
//     db.get("products")
//       .push({ ...newProduct, id: String(products.length) })
//       .write(); // Add new product to 'products'
//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Failed to add product" });
//   }
// });

server.get("/api", (req, res) => {
  const number = Math.random() * 100;
  res.send({
    number,
  });
});
server.get("/api2", (req, res) => {
  const number = Math.random() * 100;
  res.send({
    number,
  });
});

server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
