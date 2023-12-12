function addItem(game) {
  var gameTitle = game;

  var cart = JSON.parse(window.localStorage.getItem("CART"));
  if (cart !== null && cart !== "") {
    if (!cart.includes(game)) {
      cart += "," + game;
      cart = cart.replace(/"/g, "");
      cart = cart.replace(/\\/g, "");
      window.localStorage.setItem("CART", JSON.stringify(cart));
    }

    increaseTally();
  } else {
    window.localStorage.setItem("CART", JSON.stringify(game));

    increaseTally();
  }

  function increaseTally() {
    var gameQuantity = JSON.parse(window.localStorage.getItem(gameTitle));
    if (gameQuantity == null || gameQuantity == undefined) {
      gameQuantity = 1;
    } else {
      gameQuantity++;
    }
    window.localStorage.setItem(gameTitle, gameQuantity);
  }
}

function clearStorage() {
  localStorage.clear();
}
