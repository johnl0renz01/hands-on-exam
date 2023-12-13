import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const [currentLink, setCurrentLink] = useState("Home");

  useEffect(() => {
    var link = JSON.parse(window.sessionStorage.getItem("CURRENT_LINK"));
    if (link !== null) {
      setCurrentLink(link);
    }
  });

  const changeLink = (link) => {
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify(link));
    navigate(`/${link}`);
  }

  return (
    <div>
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <a onClick={() => {changeLink("Home")}} style={{cursor: "pointer"}} class="logo"><img src="assets/images/rebel-grounds.png" alt="rebel-grounds" class="image-logo"/> REBEL GROUNDS</a>
                <div class="search-input">
                  <form id="search" action="#" name="search">
                    <input type="text" placeholder="Search Game..." id="searchText" name="searchKeyword" onkeypress="handle"/>
                  </form>
                </div>
                <ul class="nav">
                  <li>
                    <a onClick={() => {changeLink("Home")}} style={{cursor: "pointer"}} class={`${currentLink == "Home" ? "active" : ""}`}>Home</a>
                  </li>
                  <li>
                    <a onClick={() => {changeLink("Browse")}} style={{cursor: "pointer"}} class={`${currentLink == "Browse" ? "active" : ""}`}>Games</a>
                  </li>
                  <li>
                    <a onClick={() => {changeLink("Checkout")}} style={{cursor: "pointer"}} class={`${currentLink == "Checkout" ? "active" : ""}`}>My Cart</a>
                  </li>
                  <li>
                    <a href="#">Profile <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYGCzWLSOC8WgGW5Yo_ZTH4MXJka9_o91EaG44GJMcEGzqfdD6ipxHVwOSxeNNfi59dg&amp;usqp=CAU" alt="images"/></a>
                  </li>
                </ul><a class="menu-trigger"><span>Menu</span></a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

