const mongoose= require("mongoose");

const uri="mongodb+srv://rajeshgroot_db_user:mqwvND0uQrpJLSth@testprodb.9sqavom.mongodb.net/?retryWrites=true&w=majority&appName=testprodb";

const connectDB=async()=>{
    try{
        await mongoose.connect(uri,{
             tls: true,
    tlsAllowInvalidCertificates: true,
        });

        console.log("✅ Connected to MongoDB Atlas from db.js");
    }catch(err){
        console.error("❌ MongoDB connection error from db.js:", err);
    }
}