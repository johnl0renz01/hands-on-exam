import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FinishOrder() {
  const navigate = useNavigate();

  const changeLink = (link) => {
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify(link));
    navigate(`/${link}`);
  }

  var orderNumber = JSON.parse(window.localStorage.getItem("ORDER_ID"));
  if (orderNumber === null) {
    document.location.href = "index.html";
  }

  var date = JSON.parse(window.localStorage.getItem("DATE_OF_PURCHASE"));
  var totalAmount = JSON.parse(window.localStorage.getItem("TOTAL_AMOUNT"));

  useEffect(() => {
    document.getElementById(
      "details"
    ).innerHTML += `<li><strong style="color: #757575;">Order Number:</strong> ${orderNumber}</li>`;
    document.getElementById(
      "details"
    ).innerHTML += `<li><strong style="color: #757575;">Date of Purchase:</strong> ${date}</li>`;
    document.getElementById("details").innerHTML += `<li>
    <strong style="color: #757575;">Total Amount Spent:</strong> ${totalAmount}
    </li>`;
  },[])

  var gameCart = JSON.parse(window.localStorage.getItem("CART"));
  var gameList = [];

  if (gameCart !== null) {
    gameCart = gameCart.replace(/"/g, "");
    gameCart = gameCart.replace(/\\/g, "");
    gameList = gameCart.split(",");
  }

  useEffect(() => {
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
    //clearStorage();
  },[]);

  function clearStorage() {
    localStorage.clear();
  }

  return (
    <div classname="">
      <div class="container content">
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content">
                    <div class="live-stream" style={{marginTop: 0, paddingBottom: 5}}>
                        <div class="col-lg-12">
                            <div class="heading-section">
                                <h4 style={{color: "white"}}>
                                    Completion of Your Order at Rebel Grounds
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div class="live-stream" style={{marginTop: 30}}>
                        <div class="finish-details">
                            <h4>Dear Customer,</h4>

                            <p>
                                We hope this message finds you well and filled with excitement! We're delighted to inform you that your recent visit to Rebel Grounds Game Shop was a success, and your shopping journey has come to a thrilling
                                conclusion.
                            </p>
                            <br />
                            <h6 style={{marginBottom: 6}}>
                                Here's a detailed summary of your purchases:
                            </h6>

                            <ul style={{color: "#c200a1"}} id="details"></ul>
                            <br />
                            <h6 style={{marginBottom: 6}}>
                                <strong>Items Purchased:</strong>
                            </h6>
                            <ol style={{color: "#c200a1"}} id="items"></ol>
                            <br />
                            <p style={{color: "#c200a1"}}><strong style={{color: "white"}}>Payment Method:</strong> Cash on Delivery</p>

                            <p>
                                You've selected some fantastic items that are sure to enhance your gaming experience. Whether you're diving into epic adventures, conquering virtual worlds, or challenging your friends, we trust that your
                                purchases will provide countless hours of enjoyment.
                            </p>
                            <br />

                            <p>
                                If you have any questions or require assistance with any of your purchases, please don't hesitate to reach out to our friendly customer support team. We're here to help you maximize the fun factor of your gaming
                                endeavors!
                            </p>
                            <br />

                            <p>
                                Keep an eye on your inbox for your digital receipts and, in case you've purchased physical items, for shipping and tracking information. We're committed to ensuring your orders reach you in perfect condition and
                                on time.
                            </p>
                            <br />

                            <p>
                                Thank you for choosing Rebel Grounds Game Shop for your gaming needs. We appreciate your patronage and look forward to serving you in the future. Stay tuned for updates on new arrivals, special offers, and
                                exclusive deals!
                            </p>
                            <br />

                            <p>
                                If you have any feedback or comments about your shopping experience with us, we'd love to hear from you. Your input helps us improve and cater to your gaming desires.
                            </p>
                            <br />

                            <p>
                                Get ready to dive into your games and let the adventures begin! We hope you thoroughly enjoy your purchases.
                            </p>
                            <p>Game on!</p>
                            <br />
                            <p style={{color: "white"}}>Best Regards,</p>
                            <p style={{color: "white"}}>
                                Rebel Grounds Game Shop<br />
                                [Rebel Grounds Inc.]
                            </p>
                        </div>
                        <div style={{display: "flex", justifyContent: "end"}}>
                            <a onClick={() => {navigate("/Review")}}>
                                <button class="finish">
                                    Write a review
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

