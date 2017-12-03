var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){

    var id = req.body.perguntaId;

    console.log("pergunta request")
    req.getConnection(function(err,conn){
        
            if (err) return next("Cannot Connect");
    
            var query = conn.query('SELECT resposta FROM forum LIMIT 10 where perguntaId = ?',id , function(err,rows){
    
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                }

                var result = JSON.parse(JSON.stringify(rows)); 
                
                res.json({result});
    
                });
        });
})

module.exports = router;



