var express = require('express');
var router = express.Router();

router.get('/forum', function(req, res, next){
    console.log("forum request")
    req.getConnection(function(err,conn){
        
            if (err) return next("Cannot Connect");
    
            var query = conn.query('SELECT pergunta FROM forum LIMIT 1 ', function(err,rows){
    
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }

                var result = JSON.parse(JSON.stringify(rows)); 
                
                res.json({result});
    
                });
        });
})


