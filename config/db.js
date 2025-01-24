const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sajinsajigeorge:SajinSajiGeorge@cluster0.nnwqb.mongodb.net/");
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err.message);
    }           
};

module.exports = connectDB;