var router = require('express').Router();
var networkController = require('../controllers/network');
var tasteMacaroon = require('../utils/tasteMacaroon');

//Get Route
router.get('/getRoute/:pubKey/:msats', tasteMacaroon, networkController.getRoute);

//Get Node info from the network
router.get('/listNode/:pubKey', tasteMacaroon, networkController.listNode);

//Get Channel info from the network
router.get('/listChannel/:shortChanId', tasteMacaroon, networkController.listChannel);

//Get Fee rates from the network
router.get('/feeRates/:rateStyle', tasteMacaroon, networkController.feeRates);

module.exports  = router;