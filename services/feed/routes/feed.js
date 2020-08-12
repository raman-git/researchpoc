var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var feedVersion = process.env.FEEDVERSION;
  //console.log('Feed service version:' + feedVersion);
  var feed = [
    {
      "reportid": "a1",
      "title" : "Canadian Oil and Gas: How Much Can Canada Cut?", 
      "pubtime" : "April 7, 2020 09:00 PM GMT",
      "summary" : "We see risk of initial supply cuts of ~900 Mbbl/d, potentially increasing to ~1.5 MMbbl/d+ with low oil prices and intensifying storage congestion. Cost structures will determine where cuts will come from yet also the ability to place barrels, giving Integrateds a relative advantage.",
      "authors": ["Benny Wong", "Stephen Byrd"],
      "link": "https://ny.matrix.ms.com/eqr/article/webapp/9ebc899a-7501-11ea-86c4-1ccff5785188?ch=public"
  },
    {
      "reportid": "a2",
      "title" : "Australia in Transition: Still Switch and Thrift", 
      "pubtime" : "April 3, 2020 04:45 PM GMT",
      "summary" : "Our third AlphaWise survey highlights how borrowers are responding to changes in the mortgage market, lower RBA rates and tax cuts. This has implications for our views on equity positioning, interest rate expectations and the AUD, as well as preferred exposures in Banks, Consumer and Real Estate.",
      "authors": ["Richard Wiles", "Chris Nicol", "Niraj Shah"],
      "link": "https://ny.matrix.ms.com/eqr/article/webapp/fe8adb2e-1b06-11ea-a985-35e3effe5e81?ch=public"
  },
  {
    "reportid": "a3",
      "title" : "Good Companies At Better Prices", 
      "pubtime" : "April 3, 2020 08:17 PM GMT",
      "summary" : "Sell-offs bring opportunities. We review our global coverage for quality companies that offer strong long term fundamental stories, now at better prices.",
      "authors": ["Michael Wilson", "Jonathan Garner"],
      "link": "https://ny.matrix.ms.com/eqr/article/webapp/0833d70a-7437-11ea-86c4-1ccff5785188?ch=public"
  }
  ]
  res.json(feed);
});

module.exports = router;
