const mongoose = require("mongoose");

// ! used the mongodb DataBase
module.exports = () =>{
    const connectionParams={
        useNewUrlParser: true,  //new way to parse the url
        useUnifiedTopology: true //to avoid warning related with unified topology
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("Connected SuccesFully");
    }catch(error){
        console.log(error);
        console.log("Conncetion Failed");
    }
}