const mongoose = require("mongoose") ; 


require('dotenv').config(); 


const connectDB=async()=>{
    try{
        mongoose.connect("mongodb+srv://Kajaltomar:tomar@cluster0.txfhsw9.mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true,})
           const connection = mongoose.connection;
           connection.once('open', () => {
               console.log('Database connected 🥳🥳🥳🥳');
           })
        }
           catch(err){
        console.log('Connection failed ☹️☹️☹️☹️');
        }
    
};

module.exports = connectDB;