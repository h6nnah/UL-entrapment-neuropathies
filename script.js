var ImgArray = [
  "photo3.png",
  "photo2.png",
  "photo1.png"
];

var TitleArray = [
  "Ligament of Struthers",
  "Pronator teres syndrome",
  "Carpal tunnel syndrome"
];

var MotorArray = [
  "flexor pollicis brevis m. (superficial head) <br>abductor pollicis brevis m. <br>opponens pollicis m. <br>Lumbrical mm. to digits 2 and 3 <br>flexor pollicis longus m. <br>abductor pollicis brevis m. <br>flexor digitorum profundus m. to digits 2 and 3 <br>opponens pollicis m. <br>pronator teres m.",
  "flexor pollicis brevis m. (superficial head) <br>abductor pollicis brevis m. <br>opponens pollicis m. <br>Lumbrical mm. to digits 2 and 3 <br>flexor pollicis longus m. <br>abductor pollicis brevis m. <br>flexor digitorum profundus m. to digits 2 and 3 <br>opponens pollicis m.",
  "flexor pollicis brevis m. (superficial head) <br>abductor pollicis brevis m. <br>opponens pollicis m. <br>Lumbrical mm. to digits 2 and 3"
];

var BranchArray = [
  "flexor pollicis longus m. <br>abductor pollicis brevis m. <br>flexor digitorum profundus m. to digits 2 and 3 <br>opponens pollicis m.",
  "flexor pollicis longus m. <br>abductor pollicis brevis m. <br>flexor digitorum profundus m. to digits 2 and 3 <br>opponens pollicis m.",
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
