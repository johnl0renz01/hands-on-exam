import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSystem from "./CartSystem";
import $ from "jquery";


export default function Browse() {
  const navigate = useNavigate();
  
  const addCart = (game) => {
    CartSystem.addItem(game); 
    navigate("/Checkout"); 
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify("Checkout"));
  }

  const [totalRating, setTotalRating] = useState([]);
  const [totalDownloads, setTotalDownloads] = useState([]);

  useEffect(()=> {
    var reviews = [];
    var downloads = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ratings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gameReviews = JSON.parse(localStorage.getItem("GAME_REVIEWS"));
    if (gameReviews !== null) {
      reviews = gameReviews;

      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].GameID == "Dark") {
          increaseTally(0, i); //first index
        } else if (reviews[i].GameID == "Forest") {
          increaseTally(1, i); 
        } else if (reviews[i].GameID == "GTA5") {
          increaseTally(2, i); 
        } else if (reviews[i].GameID == "Last") {
          increaseTally(3, i); 
        } else if (reviews[i].GameID == "Minecraft") {
          increaseTally(4, i);
        } else if (reviews[i].GameID == "Outlast") {
          increaseTally(5, i);
        } else if (reviews[i].GameID == "Poppy") {
          increaseTally(6, i);
        } else if (reviews[i].GameID == "PUBG") {
          increaseTally(7, i);
        } else if (reviews[i].GameID == "Resident") {
          increaseTally(8, i);
        } else if (reviews[i].GameID == "Slender") {
          increaseTally(9, i);
        } else if (reviews[i].GameID == "Witcher") {
          increaseTally(10, i);
        }
      }

      for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > 0) {
          ratings[i] = ratings[i] / downloads[i];
          ratings[i] = Math.round(ratings[i] * 10) / 10;
        } else {
          ratings[i] = "N/A";
        }
      }

      window.localStorage.setItem("TOTAL_RATING", JSON.stringify(ratings));
      window.localStorage.setItem("TOTAL_DOWNLOADS", JSON.stringify(downloads));

      
      setTotalRating(ratings);
      setTotalDownloads(downloads);

      function increaseTally(index, current) {
        downloads[index] ++;
        if (reviews[current].UserRating !== undefined) {
            ratings[index] += parseInt(reviews[current].UserRating);
        }
      }
    } else {
      for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > 0) {
          ratings[i] = ratings[i] / downloads[i];
          ratings[i] = Math.round(ratings[i] * 10) / 10;
        } else {
          ratings[i] = "N/A";
        }
      }

      window.localStorage.setItem("TOTAL_RATING", JSON.stringify(ratings));
      window.localStorage.setItem("TOTAL_DOWNLOADS", JSON.stringify(downloads));
      setTotalRating(ratings);
      setTotalDownloads(downloads);
    }
  },[]);

  useEffect(()=> {
    document.title = "Games"
  },[])

  return (
    <div classname="">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-content">
                
                <div class="row">
                  <div class="col-lg-8">
                    <div class="featured-games header-text">
                      <div class="heading-section">
                        <h4><em>Upcoming</em> Games</h4>
                      </div>
                      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20}}>
                        <div class="item">
                          <div class="thumb">
                            <img
                              src="https://m.media-amazon.com/images/I/6110RSDn3PL._AC_UF894,1000_QL80_.jpg"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Nov 29, 2023</h6>
                            </div>
                          </div>
                          <h4>Elden Ring<br /><span>951K Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 4.6</li>
                            <li><i class="fa fa-eye"></i> 1.3M</li>
                          </ul>
                        </div>
                        <div class="item">
                          <div class="thumb">
                            <img
                              src="https://i.3djuegos.com/juegos/18765/tekken_8/fotos/ficha/tekken_8-5775577.webp"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Dec 31, 2023</h6>
                            </div>
                          </div>
                          <h4>Tekken 8<br /><span>2.66M Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 4.9</li>
                            <li><i class="fa fa-eye"></i> 3.12M</li>
                          </ul>
                        </div>
                        <div class="item">
                          <div class="thumb">
                            <img
                              src="https://cdn.europosters.eu/image/1300/posters/assassin-s-creed-valhalla-standard-edition-i97796.jpg"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Jan 14, 2024</h6>
                            </div>
                          </div>
                          <h4>AC: Valhalla<br /><span>1.97M Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 4.9</li>
                            <li><i class="fa fa-eye"></i> 1.9M</li>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-4">
                    <div class="top-downloaded">
                      <div class="heading-section">
                        <h4><em>Top</em> Grossing</h4>
                      </div>
                      <ul>
                        <li>
                          <a href="javascript:;" onClick={() => {navigate("/Minecraft")}} class="top-grossing">
                            <img
                              src="https://wallpaperaccess.com/full/4245098.jpg"
                              alt=""
                              class="templatemo-item"
                            />
                          </a>
                          <h4>Minecraft</h4>
                          <h6>Sandbox</h6>
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i> {totalRating[4]}</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i> {totalDownloads[4]}</span>
                          <div class="download">
                            <i class="fa fa-shopping-cart" onClick={() => {addCart("Minecraft")}} style={{cursor: "pointer"}}></i>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;" onClick={() => {navigate("/GTA_5")}} class="top-grossing">
                            <img
                              src="https://media.gq.com/photos/55828635e52bc4b477a96a7b/1:1/w_500,h_500,c_limit/blogs-the-feed-grand-theft-auto-gta-5.jpg"
                              alt=""
                              class="templatemo-item"
                            />
                          </a>
                          <h4>GTA V</h4>
                          <h6>Action/Sandbox</h6>
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i> {totalRating[2]}</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i> {totalDownloads[2]}</span>
                          <div class="download">
                            <i class="fa fa-shopping-cart"  onClick={() => {addCart("GTA5")}} style={{cursor: "pointer"}}></i>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;" onClick={() => {navigate("/Pubg")}} class="top-grossing">
                            <img
                              src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MTI2NDM0OTk2OTg3MTk1/games-like-pubg-.jpg"
                              alt=""
                              class="templatemo-item"
                            />
                          </a>
                          <h4>PUBG</h4>
                          <h6>Battle Royale</h6>
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i> {totalRating[7]}</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i> {totalDownloads[7]}</span>
                          <div class="download">
                            <i class="fa fa-shopping-cart"  onClick={() => {addCart("PUBG")}} style={{cursor: "pointer"}}></i>
                          </div>
                        </li>
                      </ul>
                      <div class="text-button">
                        <a href="#">View All Games</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="most-popular">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="heading-section">
                        <h4><em>Halloween</em> Games</h4>
                      </div>
                      <div class="row">
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Slender_Arrival")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                id="item1"
                                src="https://m.media-amazon.com/images/M/MV5BOGYzMWVhZDAtYjJjYi00NDFiLTg2OWItMWI5ZWJkYzM5MWM0XkEyXkFqcGdeQXVyNjgzODI5MzE@._V1_.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4 class="elipsis">
                              Slender: The Arrival<br /><span>Horror/Puzzle</span>
                            </h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[9]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[9]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Outlast_2")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                id="item2"
                                src="https://ph-test-11.slatic.net/p/a4c01aa64066c857e7f57a52f9390975.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>Outlast 2<br /><span>Horror/Action</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[5]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[5]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Witcher_3")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://www.regfiles.net/media/registry/registry/the-witcher-3-wild-hunt-gogcom-version-icon.webp"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>Witcher 3<br /><span>Adventure/Action</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[10]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[10]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Poppy_Playtime")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://pbs.twimg.com/media/FBldV68XsA0U4Kj.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>Poppy Playtime<br /><span>Horror/Puzzle</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[6]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[6]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Resident_Evil_7")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://i.redd.it/9pkjldbqb3sa1.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>
                              Resident Evil 7<br /><span>Thriller/Survival</span>
                            </h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[8]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[8]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Last_Of_Us")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://assets-prd.ignimgs.com/2022/06/09/the-last-of-us-part-1-button-1654791855870.jpg?width=300&crop=1%3A1%2Csmart&auto=webp"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>The Last of Us<br /><span>Survival</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[3]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[3]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Forest")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://static-sg.winudf.com/video/image/5e7b5f3b-640f-405e-bc68-ff0f6747d925.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>The Forest<br /><span>Thriller/Survival</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[1]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[1]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div class="item">
                            <div class="img-container">
                              <a href="javascript:;" onClick={() => {navigate("/Dark_Souls_3")}} class="details">
                                <p><i class="fa fa-eye"></i></p>
                              </a>
                              <img
                                src="https://assets2.ignimgs.com/2015/06/15/dark-souls-3-buttonjpg-a5759a.jpg"
                                alt=""
                                class="browse-item"
                              />
                            </div>
                            <h4>Dark Souls 3<br /><span>Adventure/RPG</span></h4>
                            <ul>
                              <li><i class="fa fa-star"></i> {totalRating[0]}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads[0]}</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="main-button">
                            <a href="#">Browse More...</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

