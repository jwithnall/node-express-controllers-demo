const express = require('express');

const router = express.Router();

// add myControllers 
//const myControllers = require('../controllers/controllers.js');

//console.dir(myControllers);

module.exports = (app) => {

    router.get('/main', (req, res) => {
        return res.render('main', {
            title: 'EJS Example from Parts', 
            message: 'Hello Template built in parts',
            showMsg: true,
            headingOne: 'Page made from parts'
            });
    });

  
    return router;

}
