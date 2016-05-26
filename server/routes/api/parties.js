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
    res.json( partyIdea )
  });
})

// Add party
router.post('/', function(req,res){
  Party.create(req.body.party, function(err,party){

    res.json(party);
  })
})

// Delete party
router.delete('/:id', function(req,res){
  Party.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});

module.exports = router;
