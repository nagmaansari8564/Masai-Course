// import { navbar } from "./navbar.js";

// let navbar_div = document.getElementById("navbar");

// navbar_div.innerHTML = navbar();
// //add event handler via js
// let search_btn = document.getElementById("search_button");
// search_btn.onclick = () => {
//   searchVideos();
// };

const showClickedVideo = () => {
  let data = localStorage.getItem("clicked_video");
  let { videoId } = JSON.parse(data);

  console.log(videoId);
  let iframe = document.createElement("iframe");

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  iframe.width = "100%";
  iframe.height = "90%";

  iframe.setAttribute("allowfullscreen", true);

  iframe.setAttribute("autoplay", true);

  let video_div = document.getElementById("video_details");
  video_div.append(iframe);
};
