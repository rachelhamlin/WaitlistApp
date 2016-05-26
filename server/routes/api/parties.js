var express = require('express');
var router  = express.Router();

var Party = require('../../models/party');

// Get all parties
router.get('/', function(req,res){
  Party.find({}, function(err, dbParties){
    res.json({ parties: dbParties })
  });
});

// Show one party
router.get('/:id', function(req,res){
  Party.findById(req.params.id, function(err, dbParties){
    res.json( dbParty )
  });
})

// Add party
router.post('/', function(req,res){
  Party.create(req.body.party, function(err,party){

    res.json(party);
  })
})

// Delete party
router.delete('/:id', function(req,res,next){
  Party.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      next(err);
    } else {
    res.status(204).end();
    }
  });
});

module.exports = router;
