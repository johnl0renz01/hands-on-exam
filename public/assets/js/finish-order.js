var orderNumber = JSON.parse(window.localStorage.getItem("ORDER_ID"));
if (orderNumber === null) {
  document.location.href = "index.html";
}

var date = JSON.parse(window.localStorage.getItem("DATE_OF_PURCHASE"));
var totalAmount = JSON.parse(window.localStorage.getItem("TOTAL_AMOUNT"));

document.getElementById(
  "details"
).innerHTML += `<li><strong style="color: #757575;">Order Number:</strong> ${orderNumber}</li>`;
document.getElementById(
  "details"
).innerHTML += `<li><strong style="color: #757575;">Date of Purchase:</strong> ${date}</li>`;
document.getElementById("details").innerHTML += `<li>
<strong style="color: #757575;">Total Amount Spent:</strong> ${totalAmount}
</li>`;

var gameCart = JSON.parse(window.localStorage.getItem("CART"));
var gameList = [];

if (gameCart !== null) {
  gameCart = gameCart.replace(/"/g, "");
  gameCart = gameCart.replace(/\\/g, "");
  gameList = gameCart.split(",");
}

window.onload = function () {
  if (gameList.length > 0) {
    for (let i = 0; i < gameList.length; i++) {
      var title = gameList[i];
      var quantity = JSON.parse(window.localStorage.getItem(title));

      if (title == "Minecraft") {
        title = "Minecraft";
      } else if (title == "GTA5") {
        title = "Grand Theft Auto V";
      } else if (title == "PUBG") {
        title = "PUBG: Battlegrounds";
      } else if (title == "Slender") {
        title = "Slender: The Arrival";
      } else if (title == "Outlast") {
        title = "Outlast 2";
      } else if (title == "Witcher") {
        title = "Witcher 3";
      } else if (title == "Poppy") {
        title = "Poppy Playtime";
      } else if (title == "Resident") {
        title = "Resident Evil 7";
      } else if (title == "Last") {
        title = "The Last of Us";
      } else if (title == "Forest") {
        title = "The Forest";
      } else if (title == "Dark") {
        title = "Dark Souls 3";
      }

      var text = " copies";
      if (quantity == 1) {
        text = " copy";
      }
      document.getElementById(
        "items"
      ).innerHTML += ` <li>${title} <span style="color: #757575;">-</span> [${quantity}${text}]</li>`;
    }
  }
  clearStorage();
};

function clearStorage() {
  localStorage.clear();
}
