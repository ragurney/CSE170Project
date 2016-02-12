var data = require('../images.json');

exports.renderSlideshow = function(req, res) {
	console.log(data);
	res.render('story', {
	images: [
	{
		"image": "01.jpg", 
		"thumb": "thumb-01.jpg"
	},
	{
		"image": "02.jpg", 
		"thumb": "thumb-02.jpg"
	}
	]
	});
}