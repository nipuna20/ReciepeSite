const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(cors());

//calling routes
app.use(postRoutes);

//defining port
const PORT =8000;

const DB_URL ='mongodb+srv://itp-sliit:itp123@sllit.empkt.mongodb.net/itp-sliit?retryWrites=true&w=majority';
//const DB_URL='mongodb+srv://sliit:sliit123@itpcluster.fpcc4.mongodb.net/furnitureDB?retryWrites=true&w=majority';


//checking the connection of database
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

