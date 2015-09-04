var i = 0; 

var image = new Array();   

image[0] = "images/slider/01.jpg"; 

image[1] = "images/slider/02.jpg"; 

image[2] = "images/slider/03.jpg"; 
image[3] = "images/slider/04.jpg" ;  

var k = image.length-1;    

function swapImage(){ 

var el = document.getElementById("mydiv"); 

var img= document.getElementById("slide"); 

img.src= image[i];  

if(i < k ) { i++;}  

else  { i = 0; } 

setTimeout("swapImage()",2000);  

} 

function addLoadEvent(func) { 

var oldonload = window.onload; 

if (typeof window.onload != 'function') { 

window.onload = func; 

} else  { 

window.onload = function() { 

if (oldonload) { 

oldonload(); 

} 

func(); 

} 

} 

}  

addLoadEvent(function() { 

swapImage();

});