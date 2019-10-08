const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'welcome to the contact keeper api' })
);

//Define the routs

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`server starter on ${PORT}`));
