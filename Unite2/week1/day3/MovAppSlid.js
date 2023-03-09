//create data
const movieData = [
  {
    name: "Baaghi 3",
    rating: 7.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
  },
  {
    name: "Baby",
    rating: 7,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
  },
  {
    name: "HouseFull 4",
    rating: 6.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
  },
  {
    name: "Businessman",
    rating: 9,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1365052-v-b4a9761aa0fe",
  },
  {
    name: "M.S.Dhomi",
    rating: 8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
  },
  {
    name: "Chhichhore",
    rating: 10,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
  },
  {
    name: " Dear Dad",
    rating: 5.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5335/1770015335/1770015335-v",
  },
  {
    name: "Panga",
    rating: 5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6539/846539-v",
  },
  {
    name: "Neerja",
    rating: 9.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v",
  },
  {
    name: "Liger",
    rating: 8,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3056/1393056-v-0fc762bea369",
  },
  {
    name: "Chhapaak",
    rating: 6,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1126/651126-v",
  },
  {
    name: "Mission Mangal",
    rating: 7.5,
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
  },
];
//set all data in local storage

localStorage.setItem("movies", JSON.stringify(movieData));

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

//get 3*3 movies to show on the sreen

let data = JSON.parse(localStorage.getItem("movies"));
//console.log(data);

function createmovie(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;

  let loader_div = document.getElementById("loader_div");
  loader_div.style.display = "block";

  setTimeout(function () {
    let loader_div = document.getElementById("loader_div");
    loader_div.style.display = "none";
  }, 3000);

  //   let loader_div=document.getElementById("loader_div");
  //     loader_div.style.display="block"
  console.log(data);
  data.forEach(function (ele) {
    //create <div>
    let div = document.createElement("div");
    let Img = document.createElement("img");
    Img.setAttribute("src", ele.img);

    let p_name = document.createElement("p");
    p_name.innerHTML = `Name: ${ele.name}`;

    let p_rating = document.createElement("p");
    p_rating.innerHTML = "Rating:" + "  " + ele.rating;

    div.append(Img, p_name, p_rating);
    container.append(div);
  });
}
createmovie(data);

function assSort() {
  let data = JSON.parse(localStorage.getItem("movies"));
  data = data.sort((a, b) => a.rating - b.rating);
  createmovie(data);
}
function dessSort() {
  let data = JSON.parse(localStorage.getItem("movies"));
  data = data.sort((a, b) => b.rating - a.rating);
  createmovie(data);
}

//Movie app (loader promises)

let getmeData = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = JSON.parse(localStorage.getItem("movies"));

    if (data != null) {
      resolve(data);
    } else {
      reject("ERR: Server could not get movies data");
    }
  }, 0);
});

getmeData
  .then(function (success) {
    createmovie(success);
  })
  .catch(function (error) {
    console.log("error:", error);
  });
