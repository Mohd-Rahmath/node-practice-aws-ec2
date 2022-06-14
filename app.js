const express = require('express');
const app = express();
const port = 80;


app.get('/', (req, res) => {
    res.send('<h1>Welcome to this world</h1>')
})


app.get('/product', (req, res) => {
    res.send([{
            product_id: "101",
            price: "100"
        },
        {
            product_id: "102",
            price: "200"
        }
    ])
})


app.listen(port, () => {
    console.log(`demo app is used,port:${port}`);
})