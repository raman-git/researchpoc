var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  interests = [
    {
        type: 'Company', data: [
            { id: 1, name: "Alphabet Inc. (GOOG)" },
            { id: 2, name: "MicroSoft Corp (MSFT)" },
            { id: 3, name: "Amazon.com Inc (AMZN)" }
            
        ]
    },
    {
        type: 'Analyst', data: [
            { id: 10, name: "John Smith" },
            { id: 11, name: "Jane Doe" },
        ]
    }
];
  res.json(interests);
});

module.exports = router;
