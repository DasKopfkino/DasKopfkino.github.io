/**
 * Main JS file for Scriptor behaviours
 */

// Responsive video embeds
let videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Menu on small screens
let menuToggle = document.querySelectorAll('.menu-toggle');
if (menuToggle) {
  for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function (e) {
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    }, false);
  }
}

// const musicWrap = document.querySelector(".music-player-container");
// // main.js
// musicWrap.addEventListener("DOMContentLoaded", function() {
//   // Load YouTube API
//   const tag = document.createElement("script");
//   tag.src = "https://www.youtube.com/iframe_api";
//   const firstScriptTag = document.getElementsByTagName("script")[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   // Function to create and embed YouTube player
//   function onYouTubeIframeAPIReady() {
//     const playerContainer = document.getElementById("music-player-container");
//     const videoId = "SsKlf_x9zRE"; // Replace this with your YouTube video ID

//     const player = new YT.Player(playerContainer, {
//       height: "100",
//       width: "200",
//       videoId: videoId,
//       events: {
//         // Optional event listeners or callbacks can be added here
//       },
//     });
//   }
// });

// main.js
document.addEventListener("DOMContentLoaded", function() {
  // Load YouTube API
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Function to create and embed YouTube player
  function onYouTubeIframeAPIReady() {
    const playerContainers = document.getElementsByClassName("music-player-container");
    const videoId = "SsKlf_x9zRE"; // Replace this with your YouTube video ID

    for (let i = 0; i < playerContainers.length; i++) {
      const playerContainer = playerContainers[i];

      const player = new YT.Player(playerContainer, {
        height: "100",
        width: "200",
        videoId: videoId,
        events: {
          // Optional event listeners or callbacks can be added here
        },
      });
    }
  }
});

