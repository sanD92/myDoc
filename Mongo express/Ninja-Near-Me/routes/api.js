
const express = require('express');
const Ninja =require('../models/ninja')


const router = express.Router();


router.get('/ninjas',function(req,res,next){

/*    Ninja.find({}).then(function(ninja){
        res.send(ninja)
   }); */
 
 /*   Ninja.geoSearch(
       {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
       {maxDistance:100000,spherical:true}
   ).then(function(ninja){
    res.send(ninja)
   }); */

/*    Ninja.aggregate().near({
    near: {
     'type': 'Point',
     'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    maxDistance: 100000,
    spherical: true,
    distanceField: "dis"
   }); */

   
  Ninja.aggregate().near({ 
    near: 
    {
      'type': 'Point',
      'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)] }, 
      maxDistance: 100000, 
      spherical: true, 
      distanceField: "dis" 
     }
     ).then(function(ninjas){
     res.send(ninjas);
      });


});

router.post('/ninjas',function(req,res,next){

   /*  let ninja = new Ninja(req.body);
    ninja.save(); */
  //returns the promise
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


router.put('/ninjas/:id',function(req,res,next){

    let c_id = req.params.id;
    console.log(`object id id ${c_id}`);
    Ninja.findByIdAndUpdate({_id:c_id},req.body).then(function(){

        Ninja.findOne({_id:c_id}).then(function(ninja){
            res.send(ninja);
        });
        
    });

});


router.delete('/ninjas/:id',function(req,res,next){

    /* console.log(Ninja.Types.ObjectId.isValid(req.param.id)); */
    let c_id = req.params.id;
    console.log(`object id id ${c_id}`);
    Ninja.findByIdAndRemove({_id:c_id}).then(function(ninja){
        res.send(ninja);
    });

});

module.exports =router;