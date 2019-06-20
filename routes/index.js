var express = require('express');
var router = express.Router();
require('./db/index');
var Order = require('./models/order.model');

/* GET home page. */
router.get('/', function(req, res, next) {
		var order = new Order({
		  title: 'milk0001',
		  modality: '0123456789'
		});		 
		order.save(function(err, doc){
		  if (err) {
			console.log('save error:' + err);
		  }

		  console.log('save sucess \n' + doc);
		})
  res.render('index', { title: 'Express' });
});

module.exports = router;
