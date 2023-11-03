require('./db/db.connection');

const express = require('express');
const app = express();
app.use(express.json());

const patientRouter = require("./routes/patients.router");
const wardRouter = require("./routes/wards.router");

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:3000', 'https://medicareapp.vercel.app'],
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send("Hello, Express!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});

app.use('/patients', patientRouter);
app.use('/wards', wardRouter);