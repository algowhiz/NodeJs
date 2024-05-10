const express = require("express");
const path = require("path"); // Import the path module
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connection');
const userRoute = require('./routes/user');
const app = express();

connectToMongoDB('mongodb://localhost:27017/short-url2')
    .then(() => console.log("connected"))
    .catch((err) => console.log("err", err));

app.use(express.json());

app.use('/url', urlRoute);
app.use('/user', userRoute);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views')); // Set the views directory using path.resolve()

app.listen(4000, () => {
    console.log("server started");
});
