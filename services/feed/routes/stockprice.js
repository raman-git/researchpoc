var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    prices = {
        "GOOG": {price: "$1,520.45", trend: "up"}, 
        "MSFT": {price: "$210.20", trend: "up"}, 
        "AMZN": {price: "$3,162.02", trend: "down"}
    };
    
  res.json(prices);
});

module.exports = router;
