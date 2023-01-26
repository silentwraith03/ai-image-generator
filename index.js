const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/openai', require('./routes/openaiROUTES'));

app.listen(port, () => console.log(`Server has started on port ${port}`));
