const express = require('express');
const path = require('path');
const mime = require('mime');
const router = express.Router();
const fileInfo = require("../file/file");

router.get('/:mail_id/:file_id', function (req, res, next) {
	let mail_id = req.params.mail_id;
	let file_id = req.params.file_id;

	let file_name = fileInfo[mail_id][file_id].name;
	let mimetype = mime.getExtension(file_name);

	res.setHeader('Content-disposition', 'attachment; filename=' + file_name);
	res.setHeader('Content-type', mimetype);

	if (fileInfo[mail_id] === undefined || fileInfo[mail_id][file_id] === undefined) res.status(403).end("");
	else res.download(path.join(__dirname, `../file/${mail_id}/${file_id}.${file_name.split(".").pop()}`));
});

router.use((req, res) => {
	res.header('Content-Type', 'application/json');
	res.end(JSON.stringify({
		status: 999,
	}));
});

module.exports = router;
