//UNUSED
//UNUSED
//UNUSED

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
    subtotal += parseFloat($(this).children(".product-line-price").text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = subtotal > 0 ? shippingRate : 0;
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $(".totals-value").fadeOut(fadeTime, function () {
    $("#cart-subtotal").html("₱" + subtotal.toFixed(2));
    $("#cart-tax").html("₱" + tax.toFixed(2));
    $("#cart-shipping").html("₱" + shipping.toFixed(2));
    $("#cart-total").html("₱" + total.toFixed(2));
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
  var price = parseFloat(productRow.children(".product-price").text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children(".product-line-price").each(function () {
    $(this).fadeOut(fadeTime, function () {
      $(this).text(linePrice.toFixed(2));
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

  console.log("DATA: " + data);
  window.localStorage.setItem("CART", JSON.stringify(data));

  productRow.slideUp(fadeTime, function () {
    productRow.remove();
    recalculateCart();
  });
}
