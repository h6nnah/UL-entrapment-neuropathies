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

function updateNerve(nerveVal, nerveId) {
  document.getElementById('nerveImg').src = ImgArray[nerveVal];
  document.getElementById('nerveImg').alt = nerveId;
  document.getElementById('nerveTitle').innerHTML = TitleArray[nerveVal];
}

const pos = { x : 0, y : 0 };

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); 
})
                                             
pos.x = (x / window.innerWidth).toFixed(2);
pos.y = (y / window.innerHeight).toFixed(2);
                                             
                                             document.documentElement.style.setProperty('--x', pos.x);
document.documentElement.style.setProperty('--y', pos.y);
                                             
const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); 
})
