const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db')
const app = express();

app.use(express.json());





const bookRoute = require('./routes/bookRoutes');
app.use('/books', bookRoute);

app.listen(3000, async () => {
    try {
        await connectDB();
        console.log("MongoDB is connected to the server")

    } catch(err){
        console.log(err)
    }

    console.log("Server is running on PORT 3000")
});