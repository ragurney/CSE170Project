var data = require('../images.json');

exports.renderSlideshow = function(req, res) {
	console.log(data);
	res.render('story', {
	images: [
	{
		"id": "one",
		"image": "01.jpg", 
		"thumb": "thumb-01.jpg"
	},
	{
		"id": "two",
		"image": "02.jpg", 
		"thumb": "thumb-02.jpg"
	}
	]
	});
}