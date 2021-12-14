var ImgArray = [
  "full.png",
  "https://www.bartleby.com/107/Images/large/image816.gif",
  "https://www.bartleby.com/107/Images/large/image818.gif",
  "full.png",
  "full.png",
];

var TitleArray = [
  "Ligament of Struthers",
  "Pronator teres m. (Pronator syndrome)",
  "Flexor pollicis longus m. (Anterior interosseous syndrome)",
  "Transverse carpal ligament (Carpal tunnel syndrome)",
  "Transverse metacarpal ligament (Bowler's thumb)"
];

var MotorArray = [
  "1, 2, <br> 3, 4, 5",
  "1, 2, 3, 4",
  "1, 2, 3",
  "1, 2",
  "1"
];

function updateE(EVal) {
  document.getElementById('EImg').src = ImgArray[EVal];
  document.getElementById('EImg').alt = TitleArray[EVal];
  document.getElementById('ETitle').innerHTML = TitleArray[EVal];
  document.getElementById('motor').innerHTML = MotorArray[EVal];
}
