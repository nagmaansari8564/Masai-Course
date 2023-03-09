// function imgReplace() {
//   window.location.href = "index.html";
// }

const allData = () => {
  let data = JSON.parse(localStorage.getItem("item")) || [];

  let storeData = document.getElementById("container");
  storeData.innerHTML = null;

  data.forEach((ele) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.Poster;

    let title = document.createElement("p");
    title.innerHTML = `Name:${ele.Title}`;

    let type = document.createElement("p");
    type.innerHTML = `Type:${ele.Type}`;

    let year = document.createElement("p");
    year.innerHTML = `Year:${ele.Year}`;

    div.append(img, title, type, year);
    storeData.append(div);
  });
};
allData();
