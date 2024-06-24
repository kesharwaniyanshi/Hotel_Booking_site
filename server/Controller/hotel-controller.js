const Hotel = require("../models/hotel-model");

const hotels=async(req,res)=>{
try{
const response=await Hotel.find();
if(!response)
    {
        res.status(404).json({msg:"No Service found"});
        return;
    }
    res.status(200).json({msg:response});

}
catch(error){
console.log(`hotel ${error}`);
}
};

module.exports=hotels;