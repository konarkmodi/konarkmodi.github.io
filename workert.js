var connections = 0;
var pages = [];
onconnect = function(e) {

  var port = e.ports[0];

  port.onmessage = function(c) {
  	console.log('in worker');
    console.log(c.data[0]);
    pages.push(c.data[0]);
    connections++;
    // console.log(JSON.stringify(pages));
    port.postMessage(JSON.stringify(pages));
  }

}