/*
  Eventhandling for Overlays of work-samples
*/
var worksampleimages = document.getElementsByClassName('work-sample-picture');
var worksampleoverlays = document.getElementsByClassName('work-sample-overlay');

var showOverlay = function() {
  this.nextElementSibling.style.display = 'flex';
}

var hideOverlay = function() {
  this.style.display = 'none';
}

console.log(worksampleimages.length);
for(var i=0; i<worksampleimages.length; i++){
  worksampleimages[i].addEventListener('mousedown', showOverlay);
}

for(var i=0; i<worksampleoverlays.length; i++){
  worksampleoverlays[i].addEventListener('mousedown', hideOverlay);
}
