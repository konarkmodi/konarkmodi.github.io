var worker = new Worker('worker-storage.js');

worker.onmessage = function(event) {
	console.log(event.data);
	document.getElementById('worker-count').innerHTML = "Visit count from worker:" + event.data;
};

worker.postMessage('foo');