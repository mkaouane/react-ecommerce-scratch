import express from 'express'
import data from './data'
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});
app.get("/api/product/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x =>x.id === productId);
    if (product) {
        res.send(product)
    }
    else 
        res.statuts(404).send({msg: "Product not found"})
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})