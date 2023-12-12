import { useNavigate } from "react-router-dom";
import CartSystem from "./CartSystem";

export default function Browse() {
  const navigate = useNavigate();
  
  const addCart = (game) => {
    CartSystem.addItem(game); 
    navigate("/Checkout"); 
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify("Checkout"));
  }

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
                      <div class="owl-features owl-carousel">
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
                              src="https://i.ebayimg.com/images/g/CnQAAOSwO4dj8p45/s-l1200.webp"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Jan 13, 2024</h6>
                            </div>
                          </div>
                          <h4>God of War: Ragnarok<br /><span>4.56M Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 5.0</li>
                            <li><i class="fa fa-eye"></i> 2.8M</li>
                          </ul>
                        </div>
                        <div class="item">
                          <div class="thumb">
                            <img
                              src="https://m.media-amazon.com/images/M/MV5BMzA1NzBhODMtMmMxYS00NzE3LWE4YjUtYWFmNWRhNjhiNDE5XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Dec 11, 2023</h6>
                            </div>
                          </div>
                          <h4>Atomic Heart<br /><span>784K Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 4.8</li>
                            <li><i class="fa fa-eye"></i> 2.2M</li>
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
                        <div class="item">
                          <div class="thumb">
                            <img
                              src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/star-wars-outlaws.jpg"
                              alt=""
                            />
                            <div class="hover-effect">
                              <h6>Feb 01, 2024</h6>
                            </div>
                          </div>
                          <h4>Star Wars: Outlaws<br /><span>860K Fans</span></h4>
                          <ul>
                            <li><i class="fa fa-heart"></i> 4.7</li>
                            <li><i class="fa fa-eye"></i> 1.65M</li>
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
                          <a href="javascript:;" onClick={() => {navigate("/GTA_5")}} class="top-grossing">
                            <img
                              src="https://wallpaperaccess.com/full/4245098.jpg"
                              alt=""
                              class="templatemo-item"
                            />
                          </a>
                          <h4>Minecraft</h4>
                          <h6>Sandbox</h6>
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i>4.9</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i>20.4M</span>
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
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i>4.9</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i>13.7M</span>
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
                          <span><i class="fa fa-star" style={{color: "yellow"}}></i>4.8</span>
                          <span><i class="fa fa-shopping-cart" style={{color: "#ec6090"}}></i>11.9M</span>
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
                              <li><i class="fa fa-star"></i> 4.6</li>
                              <li><i class="fa fa-shopping-cart"></i> 4.8M</li>
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
                              <li><i class="fa fa-star"></i> 4.8</li>
                              <li><i class="fa fa-shopping-cart"></i> 3.1M</li>
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
                              <li><i class="fa fa-star"></i> 5.0</li>
                              <li><i class="fa fa-shopping-cart"></i> 7.9M</li>
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
                              <li><i class="fa fa-star"></i> 4.6</li>
                              <li><i class="fa fa-shopping-cart"></i> 3.5M</li>
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
                              <li><i class="fa fa-star"></i> 4.7</li>
                              <li><i class="fa fa-shopping-cart"></i> 2.3M</li>
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
                              <li><i class="fa fa-star"></i> 4.9</li>
                              <li><i class="fa fa-shopping-cart"></i> 6.4M</li>
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
                              <li><i class="fa fa-star"></i> 4.5</li>
                              <li><i class="fa fa-shopping-cart"></i> 1.5M</li>
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
                              <li><i class="fa fa-star"></i> 4.9</li>
                              <li><i class="fa fa-shopping-cart"></i> 5.3M</li>
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

