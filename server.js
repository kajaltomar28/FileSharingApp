const express = require("express") ; 
const app = express() ;
require('dotenv').config(); 
const cors = require('cors') ; 
const port = process.env.PORT || 5000 ; 

const path = require('path'); 

 app.use(express.static('public'));
 app.use('/images', express.static('images'));  
const connectDb = require("./config/db") ; 
connectDb() ; 
const corsOption = {
origin: ['http://localhost:3000' , 'http://localhost:5000']
}
app.get("/" , (req,res)=>{
    res.render("index.ejs"); 
})
app.use(cors(corsOption)); 
app.set('views', path.join(__dirname , '/views')); 

app.set('view engine' , 'ejs');

app.use(express.json());    

app.use("/api/files" , require("./routes/file")); 
app.use("/files", require("./routes/show")); 
app.use('/files/download', require('./routes/download')); 
app.listen(port ,()=>{
console.log(`listening at port ${port}`) ; 
})