const player = new Plyr('#my-video', {
  controls: ['play', 'rewind', 'fast-forward', 'progress', 'fullscreen', 'captions', 'download', 'pip', 'volume', 'mute']
});

player.on('play', () => {
  player.bigPlayButton.hide();
});

const videoElement = document.querySelector('.plyr__video');

videoElement.addEventListener('dblclick', function (e) {
  e.preventDefault();

  const clickX = e.clientX;
  const playerWidth = videoElement.offsetWidth;
  const center = playerWidth / 2;
  const leftThird = center / 2;
  const rightThird = center + leftThird;
