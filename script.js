$(document).ready(function() {
  $("input:radio[name=nerve]").click(function() {
    var currentNerve = $("input:radio[name=nerve]:checked").val();
    var image_name = "";
    document.getElementById('test').innerHTML = 'TEST'
    switch (currentNerve) {
      case 'Median':
        document.getElementById('test').innerHTML = 'MEDIAN';
        break;
      case 'Ulnar':
        document.getElementById('test').innerHTML = 'ULNAR';
        break;
      case 'Radial':
        document.getElementById('test').innerHTML = 'RADIAL';
        break;
      default:
        image_name += "mediandefault";
        break;
    }
    
  });
});    
        
function updateNerve() {
  switch (document.getElementByName('nerve') {
    case 'median' = 'MEDIAN';
}

function other() {
  var currentNerve = form.nerve.
  switch (document.getElementsByName(nerve)) {
    case document.getElementById('median').checked:
      document.getElementById('test').innerHTML = 'MEDIAN';
      break;
    case document.getElementById('ulnar').checked:
      day = "Monday";
      break;
    case document.getElementById('radial').checked:
       day = "Tuesday";
      break;
  }
}
