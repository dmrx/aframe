import "howler";

console.log("hasdafi")
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('#c2');
let clickable = document.querySelector('.clickable');


c1.addEventListener('raycaster-intersected', function () {
  song.volume(song.volume() + .33),
  console.log("Volume Up", song.volume())
});

c1.addEventListener('raycaster-intersected-cleared', function () {
  song.volume(song.volume() - .33),
  console.log("Volume Down", song.volume())
});


c2.addEventListener('mouseenter', function () {
  song2.volume(song2.volume() + .33),
  console.log("Volume Up", song2.volume())
});

c2.addEventListener('mouseleave', function () {
  song2.volume(song2.volume() - .33),
  console.log("Volume Down", song2.volume())
});



clickable.addEventListener('raycaster-intersected', function () {
      console.log('Player hit something!');
});


let song = new Howl({
  src: ['./song.mp3'],
  volume: 0.0,
});

let song2 = new Howl({
  src: [ './song2.mp3'],
  volume: 0.0,
});



song.play();
song2.play();

