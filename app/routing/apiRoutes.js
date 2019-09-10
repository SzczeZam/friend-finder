var list = require('./../data/friends.js')

module.exports = function(app) {
	app.get('/api/friends', (req, res) => {
		res.json(friendsList);
	});
	app.post('/api/friends', (req, res) => {
		let newFriend = req.body;
		let match = '';
		let smallestDiff = 100000;
		let diff = 0;
		friendsList.forEach((friend) => {
			for (let i = 0; i < newFriend.scores.length; i++) {
				diff += Math.abs(newFriend.scores[i] - friend.scores[i]);
			}
			if (diff < smallestDiff) {
				smallestDiff = diff;
				match = friend;
			}
		});
		friendsList.push(newFriend);
		res.json({
			matchName : match.name,
			matchPic  : match.picURL
		});
	});
};

    