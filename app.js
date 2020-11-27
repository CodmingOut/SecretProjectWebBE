const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 3100});

setInterval(() => {
	let jsonContent = {
		"sender": "eg@test.com",
		"fileName": 'malware.exe',
		"mailTitle": "[GitHub] Subscribed to CodmingOut/SecretProject notifications",
		"mailContent": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ex vulputate, laoreet urna eget, rutrum lacus. Sed a porta mi, eget finibus odio. Suspendisse potenti. Phasellus eget condimentum ipsum. Aliquam sollicitudin est purus, id commodo metus interdum non. Proin porta pharetra cursus. In lobortis sollicitudin aliquet. Phasellus dictum sem id erat porta, quis varius tortor luctus. Nunc laoreet urna sed nunc rhoncus fermentum. Nullam rutrum tempor lacus, eget convallis mauris cursus non. Proin fringilla nisl vestibulum, pellentesque leo tempor, posuere elit. Aenean eget sem vel libero faucibus lobortis non vitae est. In vitae sapien at felis blandit finibus sit amet vel orci.

Cras tempus euismod felis. Quisque sit amet venenatis velit, at iaculis ipsum. Vivamus sed tellus est. Fusce lacinia, ex at aliquet convallis, odio lacus posuere tellus, ut malesuada nisi orci eget purus. Aenean urna enim, luctus non pharetra vitae, suscipit sed nisl. Nullam vulputate tempus augue id interdum. Pellentesque mollis magna eu blandit sollicitudin. Nunc augue lorem, fringilla quis aliquet sit amet, mollis vel lacus. Maecenas ante urna, varius quis massa vel, commodo fringilla dui. Nam at dui ultrices, tincidunt magna ut, iaculis nisi. Nullam sed tempor ex. Nunc sed purus enim. Nullam finibus mattis orci, vel laoreet massa lacinia ac. Pellentesque vel mattis sem. Fusce metus augue, scelerisque nec ornare et, accumsan eget augue.`,
		"timestamp": 1606144122322
	};
	let message = JSON.stringify(jsonContent);
	wss.clients.forEach((client) => {
		client.send(message);
	});
}, 1000);

const apiRouter = require('./routes/api');
const downloadRouter = require('./routes/download');

const app = express();

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/dn', downloadRouter);
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, '/public/dist/index.html'));
});

module.exports = app;
