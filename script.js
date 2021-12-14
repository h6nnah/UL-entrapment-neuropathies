var ImgArray = [
  "full.png",
  "https://www.bartleby.com/107/Images/large/image816.gif",
  "https://www.bartleby.com/107/Images/large/image818.gif",
  "full.png",
];

var TitleArray = [
  "Ligament of Struthers",
  "Pronator teres syndrome",
  "Anterior interosseous syndrome",
  "Transverse carpal ligament (Carpal tunnel syndrome)"
];

var MotorArray = [
  "pronator teres m., flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "Flexor pollicis longus m.",
  "Flexor pollicis brevis m. (superficial head), abductor pollicis brevis m., opponens pollicis m., Lumbrical mm. to digits 2 and 3"
];

var BranchArray = [
  "",
  "flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "Anterior interosseus n. from median n.",
  "recurrent branch of median n."
];

var SignArray = [
  "Hand of benediction",
  "",
  "",
  "ape hand"
];

function updateE(EVal) {
  document.getElementById('EImg').src = ImgArray[EVal];
  document.getElementById('EImg').alt = TitleArray[EVal];
  document.getElementById('ETitle').innerHTML = TitleArray[EVal];
  document.getElementById('ESImg').alt = SignArray[EVal];
  document.getElementById('motor').innerHTML = MotorArray[EVal];
}
