const weather = document.querySelectorAll("#weather");
const header1 = document.querySelector("#firstHeading");
const firstname = document.querySelector("#firstName");
const home = document.querySelector("#home");
const mascot = document.querySelector("#mascot");
const favteam = document.querySelector("#favoriteTeam");

//display when name is nickname is typed to the header

firstname.oninput = function () {
    header1.innerText = "Choose your favorite team, " + firstname.value;
}

mascot.oninput = function () {
    favteam.value = home.value + " " + mascot.value;
}
//color is an array
//arays start ast zero and go on to n-1
weather[0].onclick = function() {
    alert('You chose sunny!');
}
weather[1].onclick = function() {
    alert('You chose rainy!');
}
weather[2].onclick = function() {
    alert('You chose windy!');
}
weather[3].onclick = function() {
    alert('You chose hot!');
}
weather[4].onclick = function() {
    alert('You chose cold!');
}
weather[5].onclick = function() {
    alert('you chose snowy');
}
