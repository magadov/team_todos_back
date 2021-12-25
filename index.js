const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors())

app.use(require('./routes'));

async function start () {
  try {
    await mongoose.connect(
      "mongodb+srv://bootcamp1:intocode@cluster0.qymc2.mongodb.net/team_todos"
    );
    app.listen(PORT, () => {

    })
  }
  catch (e) {
    console.log(e.message)
  }
}

start();
