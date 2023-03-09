// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${Search_term}&key=${API_KEY}`;

import { navbar } from "./navbar.js";

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML = navbar();
//add event handler via js
let search_btn = document.getElementById("search_button");
search_btn.onclick = () => {
  searchVideos();

  // document.getElementById("login").addEventListener("onclick", fun);

  // function fun() {
  //   window.location.href = "/auth.html";
  // }
};

let value = document.getElementById("login");
value.onclick = () => {
  window.location.href = "auth.html";
};

// let value = document.getElementById("login").addEventListener(onclick, fun());

// function fun() {
//   window.location.href = "auth.html";
// }

const searchVideos = async () => {
  try {
    const API_KEY = "AIzaSyAwtiZe7sMyt0sIfk-t96UPvdf4VuQfKis";
    let Search_term = document.getElementById("Search_term").value;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${Search_term}&key=${API_KEY}&`
    );
    let data = await response.json();
    //console.log("data", data);
    let actual_data = data.items;
    // console.log("actual_data", actual_data);
    appendVedios(actual_data);
  } catch (err) {
    console.log("err", err);
  }
};

const container = document.getElementById("container");

const appendVedios = (data) => {
  container.innerHTML = null;

  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");

    let p_title = document.createElement("p");
    p_title.innerText = snippet.title;

    let p_channel_name = document.createElement("p");
    p_channel_name.innerText = snippet.channelTitle;

    let thumbnails = document.createElement("img");
    thumbnails.src = snippet.thumbnails.high.url;
    div.append(thumbnails, p_title, p_channel_name);

    div.onclick = () => {
      data = { snippet, videoId };

      data = JSON.stringify(data);

      localStorage.setItem("clicked_video", data);

      console.log(data);
      window.location.href = "video.html";
    };

    container.append(div);
  });
};
