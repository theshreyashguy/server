const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware
app.use(cors());

app.post('/submitForm', (req, res) => {
  const { name, mobile, email, address } = req.body;
  // Do something with the form data (e.g., save it to a database)
  console.log('Form Data:', { name, mobile, email, address });
  res.json({ message: 'Form data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
