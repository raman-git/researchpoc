var express = require('express');
var axios = require('axios');
var router = express.Router();
var getStockPrices = require('./stockprice');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    interests = [
        {
            type: 'Company', data: [
                { id: "GOOG", name: "Alphabet Inc. (GOOG)" },
                { id: "MSFT", name: "MicroSoft Corp (MSFT)" },
                { id: "AMZN", name: "Amazon.com Inc (AMZN)" }

            ]
        },
        {
            type: 'Analyst', data: [
                { id: 10, name: "John Smith" },
                { id: 11, name: "Jane Doe" },
            ]
        }
    ];
    let stockservice = process.env.stockservice || "http://localhost:3001/stockprice";
    console.log('connecting to stockservice at ' + stockservice);
    axios.get(stockservice).then(res => {
        stockprices = res.data;
        console.log('get prices');
        console.log(stockprices);
        console.log(stockprices);
        interests[0].data.map((company) => {
            company.price = stockprices[company.id].price;
            company.trend = stockprices[company.id].trend;
        })
        
    }).then(()=> {
        //console.log(interests);
        res.json(interests);
    });
});

module.exports = router;
