var gameCart = JSON.parse(window.localStorage.getItem("CART"));
var gameList = [];

if (gameCart !== null) {
  gameCart = gameCart.replace(/"/g, "");
  gameCart = gameCart.replace(/\\/g, "");

  gameList = gameCart.split(",");
}

window.onload = function () {
  // can also use window.addEventListener('load', (event) => {
  console.log("asdad");
  if (gameList.length > 0) {
    for (let i = 0; i < gameList.length; i++) {
      if (gameList[i] == "Minecraft") {
        var quantity = JSON.parse(window.localStorage.getItem("Minecraft"));
        document.getElementById("product_container").innerHTML += product(
          "Minecraft",
          "https://wallpaperaccess.com/full/4245098.jpg",
          "Minecraft",
          "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours.",
          "1138.59",
          quantity
        );
      } else if (gameList[i] == "GTA5") {
        var quantity = JSON.parse(window.localStorage.getItem("GTA5"));
        document.getElementById("product_container").innerHTML += product(
          "GTA5",
          "https://media.gq.com/photos/55828635e52bc4b477a96a7b/1:1/w_500,h_500,c_limit/blogs-the-feed-grand-theft-auto-gta-5.jpg",
          "Grand Theft Auto V",
          "Grand Theft Auto V features three main characters in the fictional state of San Andreas, each involved in heists and facing threats from corrupt officials and powerful criminals.",
          "853.80",
          quantity
        );
      } else if (gameList[i] == "PUBG") {
        var quantity = JSON.parse(window.localStorage.getItem("PUBG"));
        document.getElementById("product_container").innerHTML += product(
          "PUBG",
          "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MTI2NDM0OTk2OTg3MTk1/games-like-pubg-.jpg",
          "PUBG: Battlegrounds",
          "Battle royale game where players battle to be the last person or team standing on an island with a range of weapons and strategies.",
          "768.36",
          quantity
        );
      } else if (gameList[i] == "Slender") {
        var quantity = JSON.parse(window.localStorage.getItem("Slender"));
        document.getElementById("product_container").innerHTML += product(
          "Slender",
          "https://m.media-amazon.com/images/M/MV5BOGYzMWVhZDAtYjJjYi00NDFiLTg2OWItMWI5ZWJkYzM5MWM0XkEyXkFqcGdeQXVyNjgzODI5MzE@._V1_.jpg",
          "Slender: The Arrival",
          "The gameplay revolves around exploring dark and eerie environments while being pursued by the iconic and enigmatic Slender Man, a tall, faceless, and supernatural entity.",
          "430.50",
          quantity
        );
      } else if (gameList[i] == "Outlast") {
        var quantity = JSON.parse(window.localStorage.getItem("Outlast"));
        document.getElementById("product_container").innerHTML += product(
          "Outlast",
          "https://ph-test-11.slatic.net/p/a4c01aa64066c857e7f57a52f9390975.jpg",
          "Outlast 2",
          "The game is set in a rural and religiously fanatic community known as the Temple Gate. As you explore the environment, you encounter disturbing and horrific events",
          "1139.35",
          quantity
        );
      } else if (gameList[i] == "Witcher") {
        var quantity = JSON.parse(window.localStorage.getItem("Witcher"));
        document.getElementById("product_container").innerHTML += product(
          "Witcher",
          "https://www.regfiles.net/media/registry/registry/the-witcher-3-wild-hunt-gogcom-version-icon.webp",
          "Witcher 3",
          "Geralt of Rivia, a skilled monster hunter known as a Witcher. Geralt is on a quest to find his adopted daughter, Ciri, who is being pursued by a group known as the Wild Hunt.",
          "2279.27",
          quantity
        );
      } else if (gameList[i] == "Poppy") {
        var quantity = JSON.parse(window.localStorage.getItem("Poppy"));
        document.getElementById("product_container").innerHTML += product(
          "Poppy",
          "https://pbs.twimg.com/media/FBldV68XsA0U4Kj.jpg",
          "Poppy Playtime",
          "The story revolves around the player's exploration of the abandoned factory, particularly the Huggy Wuggy and Poppy Playtime toys.",
          "569.39",
          quantity
        );
      } else if (gameList[i] == "Resident") {
        var quantity = JSON.parse(window.localStorage.getItem("Resident"));
        document.getElementById("product_container").innerHTML += product(
          "Resident",
          "https://i.redd.it/9pkjldbqb3sa1.jpg",
          "Resident Evil 7",
          "First-person perspective, an eerie atmosphere, and a story of a man searching for his missing wife in a sinister Louisiana mansion.",
          "455.40",
          quantity
        );
      } else if (gameList[i] == "Last") {
        var quantity = JSON.parse(window.localStorage.getItem("Last"));
        document.getElementById("product_container").innerHTML += product(
          "Last",
          "https://assets-prd.ignimgs.com/2022/06/09/the-last-of-us-part-1-button-1654791855870.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
          "The Last of Us",
          "Set in a post-apocalyptic world, players follow the story of Joel, a smuggler, and Ellie, a teenage girl, as they embark on a dangerous journey across the United States. ",
          "2735.24",
          quantity
        );
      } else if (gameList[i] == "Forest") {
        var quantity = JSON.parse(window.localStorage.getItem("Forest"));
        document.getElementById("product_container").innerHTML += product(
          "Forest",
          "https://static-sg.winudf.com/video/image/5e7b5f3b-640f-405e-bc68-ff0f6747d925.jpg",
          "The Forest",
          "Explore the island's lush but perilous environment, scavenge for resources, build shelters, and craft weapons to defend against hostile mutants.",
          "284.41",
          quantity
        );
      } else if (gameList[i] == "Dark") {
        var quantity = JSON.parse(window.localStorage.getItem("Dark"));
        document.getElementById("product_container").innerHTML += product(
          "Dark",
          "https://assets2.ignimgs.com/2015/06/15/dark-souls-3-buttonjpg-a5759a.jpg",
          "Dark Souls 3",
          "Embark on a journey to defeat powerful foes and bosses in a dying world, with a strong focus on precise timing and strategic gameplay.",
          "2100.00",
          quantity
        );
      }
    }
    checkout();
  } else {
    checkout();
  }
};

function product(id, imglink, title, description, price, quantity) {
  var value = price;
  value = value.replace(/₱/g, "");
  value = value.replace(/,/g, "");
  value = parseFloat(value) * quantity;
  value = parseFloat(value.toFixed(2)).toLocaleString();
  price = parseFloat(price).toLocaleString();
  return `
      <div class="product" id="${id}">
        <div class="product-image">
          <img src="${imglink}">
        </div>
        <div class="product-details">
          <div class="product-title">${title}</div>
          <p class="product-description">${description}</p>
        </div>
        <div class="product-price">₱${price}</div>
        <div class="product-quantity">
          <input type="number" value="${quantity}" min="1">
        </div>
        <div class="product-removal">
          <button class="remove-product">
            Remove
          </button>
        </div>
        <div class="product-line-price">₱${value}</div>
        </div>
      
        `;
}

function checkout() {
  /* Set rates + misc */
  var taxRate = 0.05;
  var shippingRate = 15.0;
  var fadeTime = 300;

  recalculateCart();
  /* Assign actions */
  $(".product-quantity input").change(function () {
    updateQuantity(this);
  });

  $(".product-removal button").click(function () {
    removeItem(this);
  });

  /* Recalculate cart */
  function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $(".product").each(function () {
      var value = $(this).children(".product-line-price").text();
      value = value.replace(/₱/g, "");
      value = value.replace(/,/g, "");
      subtotal += parseFloat(value);
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = subtotal > 0 ? shippingRate : 0;
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $(".totals-value").fadeOut(fadeTime, function () {
      $("#cart-subtotal").html(
        "₱" + parseFloat(subtotal.toFixed(2)).toLocaleString()
      );
      $("#cart-tax").html("₱" + parseFloat(tax.toFixed(2)).toLocaleString());
      $("#cart-shipping").html(
        "₱" + parseFloat(shipping.toFixed(2)).toLocaleString()
      );
      $("#cart-total").html(
        "₱" + parseFloat(total.toFixed(2)).toLocaleString()
      );
      if (total == 0) {
        $(".checkout").fadeOut(fadeTime);
      } else {
        $(".checkout").fadeIn(fadeTime);
      }
      $(".totals-value").fadeIn(fadeTime);
    });
  }

  /* Update quantity */
  function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var value = productRow.children(".product-price").text();
    value = value.replace(/₱/g, "");
    value = value.replace(/,/g, "");
    var price = parseFloat(value);
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    var gameTitle = $(quantityInput).parent().parent().attr("id");
    window.localStorage.setItem(gameTitle, quantity);

    /* Update line price display and recalc cart totals */
    productRow.children(".product-line-price").each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text("₱" + parseFloat(linePrice.toFixed(2)).toLocaleString());
        recalculateCart();
        $(this).fadeIn(fadeTime);
      });
    });
  }

  /* Remove item from cart */
  function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    var productID = $(removeButton).parent().parent().attr("id");

    var data = JSON.parse(window.localStorage.getItem("CART"));
    if (data.includes(productID)) {
      data = data.replace(productID, "");
      data = data.replace(",,", ",");
      if (data.charAt(data.length - 1) == ",") {
        data = data.substring(0, data.length - 1);
      }
      if (data[0] == ",") {
        data = data.replace(",", "");
      }
    }

    window.localStorage.setItem("CART", JSON.stringify(data));
    window.localStorage.removeItem(productID);

    productRow.slideUp(fadeTime, function () {
      productRow.remove();
      recalculateCart();
    });
  }
}

function finishOrder() {
  var id = "RGINC-000";
  id += randomID(10);

  const date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  var currentDate = date.toLocaleString(options);

  var totalValue = document.getElementById("cart-total").textContent;

  window.localStorage.setItem("ORDER_ID", JSON.stringify(id));
  window.localStorage.setItem("DATE_OF_PURCHASE", JSON.stringify(currentDate));
  window.localStorage.setItem("TOTAL_AMOUNT", JSON.stringify(totalValue));
}

function randomID(length) {
  let result = "";
  const characters = "123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
