function capture(video, canvas, image, captureButton, stopButton, snapshotButton) {
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;
	var track = null;

	captureButton.disabled = true;
	stopButton.disabled = false;
	snapshotButton.disabled = false;

	stopButton.onclick = function () {
		stop(video);
	};

	window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
						  navigator.mozGetUserMedia || navigator.msGetUserMedia;

	var constraints = {
		video: true
	}

	var successCallback = function(mediaStream) {
		video.src = (window.URL && window.URL.createObjectURL(mediaStream)) || mediaStream;
		video.addEventListener("loadedmetadata", function(e) {
			video.style.display = "block";
			localMediaStream = mediaStream;
			track = localMediaStream.getTracks()[0];
			snapshotButton.onclick = function(event) {
				takePhoto();
			}
		});
	};

	var errorCallback = function() {
		console.log("failure to get media");
	};

	var takePhoto = function () {
		ctx.drawImage(video, 0, 0, 320, 240);
		canvas.style.display = "block";
		showImage();
	};

	var showImage = function () {
		image.src = canvas.toDataURL('image/webp');
		image.style.display = "none";
	};

	var stop = function () {
		if (localMediaStream) {
			track.stop(); /* TODO: it doesn't work in Opera Mobile 12 */
		}

		captureButton.disabled = false;
		stopButton.disabled = true;
		snapshotButton.disabled = true;
	};

	if (navigator.getUserMedia) {
		navigator.getUserMedia(constraints, successCallback, errorCallback);
	} else {
		console.log("getUserMedia not supported");
	}
}


function init() {
	var video = document.querySelector('video#getUserMedia');
	var canvas = document.querySelector('#canvas');
	var snapshot = document.querySelector('#snapshot');
	var captureButton = document.querySelector('#captureButton');
	var stopButton = document.querySelector('#stopButton');
	var snapshotButton = document.querySelector('#snapshotButton');

	captureButton.onclick = function () {
		capture(video, canvas, snapshot, captureButton, stopButton, snapshotButton);
	};
}