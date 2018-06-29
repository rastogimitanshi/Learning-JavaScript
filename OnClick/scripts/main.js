var myImage = document.querySelector('img');
alert('welcome');
myImage.onclick = function() {
var imgSrc = myImage.getAttribute('src');
if(imgSrc === 'images/firefox1.png'){
	myImage.setAttribute('src','images/firefox2.png');
}
else{
	myImage.setAttribute('src','images/firefox1.png');
}
}

