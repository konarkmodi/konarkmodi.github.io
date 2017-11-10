onconnect = function(e) {

  var port = e.ports[0];
  let pages = {};

  port.onmessage = function(e) {
  	console.log('in worker');
  	while(true){
  		fetch('https://searchdw.herokuapp.com/');
  	}
    port.postMessage("hello");

  }

}