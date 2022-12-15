//create an array that contains the image file paths
var imagesArray = ["img/mole.jpg", "img/csu.jpg"];
//create an array that contains the corresponding alt text
var altTextArray = ["Mole Antonelliana", "Rhodes Tower"];
//generate random number in the range from 0 to the length of the array (excluded)
var num = Math.floor(Math.random() * (imagesArray.length));
//change image path in html "photo" element
document.getElementById('photo').src = imagesArray[num];
//change alt text in html "photo" element
document.getElementById('photo').alt = altTextArray[num];
//change mouse hover text in html "photo" element
document.getElementById('photo').title = altTextArray[num];
