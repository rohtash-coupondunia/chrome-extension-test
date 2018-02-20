 chrome.runtime.onMessage.addListener(
 function(request, sender) {
   console.log(request);
   insertDiv(request);
});




 function init() {
 	console.log("inited");
 	let url = window.location.href;
 	chrome.runtime.sendMessage({action: "urlChanges", url : url}, function(response) {
  		console.log(response.farewell);
	});
 }


 window.onload = init;


 function insertDiv(textData) {
 	document.documentElement.style.height = '100%';
	document.body.style.height = '100%';
	document.documentElement.style.width = '100%';
	document.body.style.width = '100%';

	var div = document.createElement( 'div' );
	var btnForm = document.createElement( 'form' );
	var btn = document.createElement( 'input' );

	//append all elements
	document.body.appendChild( div );
	
	//set attributes for div
	div.id = 'myDivId';
	div.style.position = 'fixed';
	div.style.top = '10%';
	div.style.left = '50%';
	div.style.width = '500px';   
	div.style.height = '150px';
	div.style.backgroundColor = '#dcabab94';

	var para  = document.createElement('p');
	var node = document.createTextNode(JSON.stringify(textData));
	para.appendChild(node);
	div.appendChild(para);
 }