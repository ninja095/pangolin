const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routers/user-routes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const pass = process.env.PASS
const PORT = process.env.PORT || 3000;
const URL_DB = `mongodb+srv://ruslan:${pass}@cluster0.99ki78t.mongodb.net/pangolin?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(cors());
app.use(bodyParser.json());


mongoose.set('strictQuery', false);
mongoose.connect(URL_DB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))


app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server running on port ${PORT}`);
});



