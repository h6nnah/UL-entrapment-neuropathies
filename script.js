var ImgArray = [
  "https://www.bartleby.com/107/Images/large/image816.gif",
  "https://www.bartleby.com/107/Images/large/image816.gif",
 "https://www.bartleby.com/107/Images/large/image818.gif"
];
var TitleArray = [
  "Median Nerve",
  "Ulnar Nerve",
  "Radial Nerve"
];
function UpdateImg(imgSrc, imgId) {
  document.getElementById('NerveImg').src = ImgArray[imgSrc];
  document.getElementById('NerveImg').alt = imgId;
  document.getElementById('nerveTitle').innerHTML = TitleArray[imgSrc];
}
