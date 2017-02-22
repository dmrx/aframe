import "howler";

console.log("hasdafi")
var circle = document.querySelector('a-circle')


circle.addEventListener('mouseenter', function () {
  song.volume(song.volume() + .33),
  console.log("Volume Up", song.volume())
});

circle.addEventListener('mouseleave', function () {
  song.volume(song.volume() - .33),
  console.log("Volume Down", song.volume())
});

var song = new Howl({
  src: ['song.mp3'],
  volume: 0.0,
});



song.play();
