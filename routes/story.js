var data = require('../images.json');

exports.renderSlideshow = function(req, res) {
	console.log(data);

	res.render('story', data); 

	/*{
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
	},
	{
		"id": "three",
		"image": "03.jpg", 
		"thumb": "thumb-03.jpg"
	},
	{
		"id": "four",
		"image": "04.jpg", 
		"thumb": "thumb-04.jpg"
	},
	{
		"id": "five",
		"image": "05.jpg", 
		"thumb": "thumb-05.jpg"
	},
	{
		"id": "six",
		"image": "06.jpg", 
		"thumb": "thumb-06.jpg"
	},
	{
		"id": "seven",
		"image": "07.jpg", 
		"thumb": "thumb-07.jpg"
	},
	{
		"id": "eight",
		"image": "08.jpg", 
		"thumb": "thumb-08.jpg"
	},
	{
		"id": "nine",
		"image": "09.jpg", 
		"thumb": "thumb-09.jpg"
	},
	{
		"id": "ten",
		"image": "10.jpg", 
		"thumb": "thumb-10.jpg"
	},
	{
		"id": "eleven",
		"image": "11.jpg", 
		"thumb": "thumb-11.jpg"
	},
	{
		"id": "twelve",
		"image": "12.jpg", 
		"thumb": "thumb-12.jpg"
	},
	]
	});*/
}