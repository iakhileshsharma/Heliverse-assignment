const express = require('express');
const {User, validate} = require('../models/usersModel');
const router = express.Router();




router.get('/', async(req, res)=>{
    let users = await User.find()
    res.send(users);
});




router.post('/', async(req, res)=>{
    
    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const user = new User({
        first_Name : req.body.first_Name,
        last_Name : req.body.last_Name,
        email : req.body.email,
        gender : req.body.gender,
        domain : req.body.domain,
        available : req.body.available

         
})
    await user.save();    
    res.send(user);
});





router.put('/:_id', async (req, res)=>{

    const {error} = validate(req.body)
    if(error) res.status(400).send(error.details[0].message)

    
    const user = await User.findByIdAndUpdate(req.params._id,
         {first_Name: req.body.firstName, last_Name: req.body.lastName, email: req.body.email, domain: req.body.domain},
         {new : true})

    if(!user) return res.status(404).send('The user with this ID was not found')

    res.send(user);
});



router.delete('/:_id', async (req, res)=> {
    
    const user = await User.findByIdAndDelete(req.params._id)

    if(!user) return res.status(404).send('The user  with the given ID was not found');

    
    res.send(user);
});

 
router.get('/:_id', async (req, res)=> {
    const user = await User.findById(req.params._id)
    if(!user) return res.status(404).send('The user with the ID was not found');

    res.send(user);

});



module.exports = router