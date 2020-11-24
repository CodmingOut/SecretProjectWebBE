const express = require('express');
const router = express.Router();
const file = require("../file/file");

router.get('/list/', function (req, res, next) {
	res.header('Content-Type', 'application/json');
	res.end(JSON.stringify([
		{
			title: "[GitHub] Subscribed to CodmingOut/SecretProject notifications",
			sender: "eg@test.com",
			receiver: "my@test.com",
			fileList: Object.keys(file["12341234"]).map(id => {
				let t = file["12341234"][id];
				t.id = id;
				return t;
			}),
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ex vulputate, laoreet urna eget, rutrum lacus. Sed a porta mi, eget finibus odio. Suspendisse potenti. Phasellus eget condimentum ipsum. Aliquam sollicitudin est purus, id commodo metus interdum non. Proin porta pharetra cursus. In lobortis sollicitudin aliquet. Phasellus dictum sem id erat porta, quis varius tortor luctus. Nunc laoreet urna sed nunc rhoncus fermentum. Nullam rutrum tempor lacus, eget convallis mauris cursus non. Proin fringilla nisl vestibulum, pellentesque leo tempor, posuere elit. Aenean eget sem vel libero faucibus lobortis non vitae est. In vitae sapien at felis blandit finibus sit amet vel orci.

Cras tempus euismod felis. Quisque sit amet venenatis velit, at iaculis ipsum. Vivamus sed tellus est. Fusce lacinia, ex at aliquet convallis, odio lacus posuere tellus, ut malesuada nisi orci eget purus. Aenean urna enim, luctus non pharetra vitae, suscipit sed nisl. Nullam vulputate tempus augue id interdum. Pellentesque mollis magna eu blandit sollicitudin. Nunc augue lorem, fringilla quis aliquet sit amet, mollis vel lacus. Maecenas ante urna, varius quis massa vel, commodo fringilla dui. Nam at dui ultrices, tincidunt magna ut, iaculis nisi. Nullam sed tempor ex. Nunc sed purus enim. Nullam finibus mattis orci, vel laoreet massa lacinia ac. Pellentesque vel mattis sem. Fusce metus augue, scelerisque nec ornare et, accumsan eget augue.`,
			id: "12341234",
			time: 1606144122322
		}
	]));
});

module.exports = router;
