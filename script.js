var ImgArray = [
  "photo3.png",
  "photo2.png",
  "photo1.png",
];

var TitleArray = [
  "Ligament of Struthers",
  "Pronator teres syndrome",
  "Transverse carpal ligament (Carpal tunnel syndrome)"
];

var MotorArray = [
  "pronator teres m., flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "Flexor pollicis brevis m. (superficial head), abductor pollicis brevis m., opponens pollicis m., Lumbrical mm. to digits 2 and 3"
];

var BranchArray = [
  "",
  "flexor pollicis longus m., abductor pollicis brevis m., flexor digitorum profundus m. to digits 2 and 3, and opponens pollicis m.",
  "recurrent branch of median n."
];

var SignArray = [
  "Ape hand <br>Hand of benediction",
  "Ape hand",
  "Ape hand"
];

function updateE(EVal) {
  document.getElementById('EImg').src = ImgArray[EVal];
  document.getElementById('EImg').alt = TitleArray[EVal];
  document.getElementById('ETitle').innerHTML = TitleArray[EVal];
  document.getElementById('ESImg').alt = SignArray[EVal];
  document.getElementById('motor').innerHTML = MotorArray[EVal];
}
