// controls
var controls = [
  'play-large', // The large play button in the center
  // 'restart', // Restart playback
  'rewind', // Rewind by the seek time (default 10 seconds)
  'play', // Play/pause playback
  'fast-forward', // Fast forward by the seek time (default 10 seconds)
  'progress', // The progress bar and scrubber for playback and buffering
  'current-time', // The current time of playback
  'duration', // The full duration of the media
  // 'mute', // Toggle mute
  'volume', // Volume control
  'captions', // Toggle captions
  'settings', // Settings menu
  'pip', // Picture-in-picture (currently Safari only)
  'airplay', // Airplay (currently Safari only)
  'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
  'fullscreen' // Toggle fullscreen
];
const player = new Plyr('#my-video', {
  controls,
  fill: true,
  // width: 98,
  aspectRatio: '9:16',
  responsive: true
});

const videoElement = document.querySelector('.plyr__video');

videoElement.addEventListener('dblclick', function (e) {
  e.preventDefault();

  const clickX = e.clientX;
  const playerWidth = videoElement.offsetWidth;
  const center = playerWidth / 2;
  const leftThird = center / 2;
  const rightThird = center + leftThird;

})