//console.log("users.js loaded");
const searchBar = document.querySelector(".search input"), // search bar
  searchIcon = document.querySelector(".users .search button"), // search icon
  usersList = document.querySelector(".users-list"); // users list

searchIcon.onclick = () => {
  searchIcon.classList.toggle("active");
  searchBar.focus();
  searchBar.classList.toggle("active");
  searchBar.value = "";
};

searchBar.onkeyup = () => {
  let searchTerm = searchBar.value;
  if (searchTerm != "") {
    searchBar.classList.add("active");
  } else {
    searchBar.classList.remove("active");
  }
  // start ajax
  let xhr = new XMLHttpRequest(); // creating XML object
  xhr.open("POST", "php/search.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        console.log(data);
        usersList.innerHTML = data;
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("searchTerm=" + searchTerm);
};

setInterval(() => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "php/users.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        //console.log(data);
        //console.log("user is is", usersList);
        if (!searchBar.classList.contains("active")) {
          // if active not contains in search bar
          usersList.innerHTML = data;
        }
      }
    }
  };
  xhr.send();
}, 500);
