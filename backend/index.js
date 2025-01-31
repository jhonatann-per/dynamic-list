const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Olá mundo");
})

app.listen(PORT, () => {
    console.log(`Servidor Rodando na porta: http://localhost:${PORT}`)
})