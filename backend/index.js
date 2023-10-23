const bodyParser = require('body-parser');
const express = require('express');
const fs = require('node:fs/promises');
const { orderValidator } = require('../backend/validators');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/meals', async (req, res) => {
    const meals = await fs.readFile('./data/mockedMeals.json', 'utf8');
    return res.status(200).json(JSON.parse(meals));
});

app.post('/order', async (req, res) => {
    const orders = await fs.readFile('./data/orders.json', 'utf8');
    const { customer_phone, customer_adress, customer_city, customer_name } = req.body.customerData;

    if (
        customer_name.length < 1 ||
        customer_city.length < 1 ||
        customer_adress.length < 1 ||
        customer_phone.length !== 9
    ) {
        return res.status(400).json('Wrong data provided');
    }

    const allOrders = JSON.parse(orders);
    allOrders.push({
        orderId: Math.random() * 100,
        payment: req.body.paymentMethod.paymentName,
        customer: req.body.customerData,
        order: req.body.items,
    });

    await fs.writeFile('./data/orders.json', JSON.stringify(allOrders, null, 4));
    return res.status(201).json('Order successfully created.');
});

app.use((req, res) => {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    res.status(404).json({ message: 'Not found' });
});

app.listen(PORT, (error) => {
    if (error) {
        console.error('Failed to starting server.', error.message);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
