const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // process.env ka chakkar hi khatam, direct link daal diya
        await mongoose.connect("mongodb+srv://ahmedalee:ahmedalee123321@ahmed.e8qvpsm.mongodb.net/?appName=Ahmed");
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.log("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};
module.exports = connectDB;