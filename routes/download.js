const router  = require("express").Router(); 

const File = require('../models/file'); 
router.get('/:uuid', async(req,res)=>{
    const file = await  File.findOne({uuid:req.params.uuid}); 
    if(!file){
        return res.render('download', {error:'Linkhas been expired'}); 
       
    }
     const response = await file.save();
     const filePath = `${__dirname}/../${file.path}`; 
    // console.log(filePath) ; 
     res.download(filePath); 
    //res.send(__dirname); 
})
module.exports =router; 