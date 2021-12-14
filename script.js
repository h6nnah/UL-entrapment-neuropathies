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

function updateE(EVal, EId) {
  document.getElementById('EImg').src = ImgArray[EVal];
  document.getElementById('EImg').alt = EId;
  document.getElementById('ETitle').innerHTML = TitleArray[EVal];
}
