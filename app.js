const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api');
const downloadRouter = require('./routes/download');

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/dn', downloadRouter);
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, '/public/dist/index.html'));
});

module.exports = app;
