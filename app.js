const express = require('express');
const cors = require('cors');

const allRoutes = require('./Routes/allRoutes');

const app = express();
const PORT = 3100;

app.use(cors());
app.use(express.json());

app.use('/', allRoutes);


app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);
