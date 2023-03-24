const router = require('express').Router();
const controller = require("../Controller/controller");
// const { validate } = require('../Middleware/middleware');


router.get('/signup',controller.signup)


// router.all('/', (req, res)=>{
//     res.send({message: "Oops! Requested page is not available."});
// });


module.exports = router