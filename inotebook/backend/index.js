// const connectToMongo = require('./db.js');

// const express = require('express');

// connectToMongo();

// const app = express()
// const port = 3000;

// app.use('/api/auth',require ('./routes/auth'));
// app.use('/api/notes',require ('./routes/notes'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const connectToMongo = require('./db.js');
const express = require('express');
const app = express();
// const port = 3000; we kept this for react app
const port = 5000;

connectToMongo();

app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
