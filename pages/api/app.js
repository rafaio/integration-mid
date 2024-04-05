const express = require("express");
const { randomUUID } = require ("crypto")


const app = express();

app.use(express.json());

const products = [];

app.post("/products", (request, response) => {
//nome e preço

const {accession_number, patient_id} = request.body;

const product = {
    accession_number,
    patient_id,
    Id: randomUUID(),
}

products.push(product);


return response.json(product);
console.log(body);
});

app.listen(4002, () => console.log ("Servidor está rodando na porta 4002"));