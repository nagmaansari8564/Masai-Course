//create search button
//setup search.html and search.js
//implement slideshow on search.html
//create search button
//add onclick event handler for above
//write searchMovies() function

//sliding image on the screen
let carousel_div = document.getElementById("carousel");
function carousel() {
  let images = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3476/1363476-h-4b13ab355e0e",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6311/1376311-h-a696871e4a52",
  ];

  let imgElement = document.createElement("img");
  imgElement.src = images[0];
  carousel_div.append(imgElement);

  let i = 1;
  setInterval(function () {
    //document.getElementById("carousel").append(img)
    if (i === images.length) {
      i = 0;
    }
    imgElement.src = images[i];
    carousel_div.append(imgElement);

    i++;
  }, 3000);
}
carousel();

async function searchMovies() {
  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = "block";
  //who takes us to the server ? fetch
  //what is the argument to fetch?
  //http://www.omdbapi.com/?apikey=3f218c30=avengers

  let movie_name = document.getElementById("movie_name").value;

  //   let response = fetch(
  //     ` http://www.omdbapi.com/?i=tt3896198&apikey=3f218c30&s=${movie_name}`
  //   );

  //   response
  //     .then(function (success) {
  //       // console.log("success:", success);

  //       let data = success.json();
  //       // console.log('data:',data);
  //       data
  //         .then(function (success) {
  //           console.log("success:", success);
  //         })
  //         .catch(function (error) {
  //           console.log("error:", error);
  //         });
  //     })
  //     .catch(function (error) {
  //       console.log("error:", error);
  //     });

  // better code
  try {
    let response = await fetch(
      ` http://www.omdbapi.com/?i=tt3896198&apikey=3f218c30&s=${movie_name}`
    );

    let data = await response.json();
    // console.log("data:", data);

    let actual_data = data.Search;
    //console.log("actual-data:", actual_data);
    createmovie(actual_data);
  } catch (err) {
    console.log("err:", err);
  }
}

function createmovie(data) {
  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = "none";

  let container = document.getElementById("movies");
  container.innerHTML = null;

  data.forEach(function (ele) {
    //create <div>
    let div = document.createElement("div");

    let Img = document.createElement("img");
    Img.setAttribute("src", ele.Poster);

    let p_name = document.createElement("p");
    p_name.innerHTML = `Name: ${ele.Title}`;

    div.onclick = () => {
      storedClickedData(ele);
    };

    // let p_rating = document.createElement("p");
    // p_rating.innerHTML = "Rating:" + "  " + ele.rating;

    div.append(Img, p_name);
    container.append(div);
  });
}

let id;
function debounce(func, delay) {
  console.log("1");
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    func();
  }, delay);
}

function storedClickedData(ele) {
  let data = [];
  data.push(ele);
  localStorage.setItem("item", JSON.stringify(data));
  window.location.href = "moviedetail.html";
}
// "./week1/day3/moviedetail.html";
