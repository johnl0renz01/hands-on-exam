
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSystem from "../CartSystem";

export default function Resident_Evil_7() {
  const navigate = useNavigate();

  const [totalRating, setTotalRating] = useState(0);
  const [totalDownloads, setTotalDownloads] = useState(0);

  const [reviewState, setReviewState] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  useEffect(()=> {
    var reviews = [];
    var downloads = 0;
    var ratings = 0;
    var gameReviews = JSON.parse(localStorage.getItem("GAME_REVIEWS"));
      if (gameReviews !== null) {
        reviews = gameReviews;
        setReviewList(reviews);

        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].GameID == "Resident") {
                downloads ++;
                if (reviews[i].UserRating !== undefined) {
                    ratings += parseInt(reviews[i].UserRating);
                }
            }
        }
        ratings = ratings / downloads;
        ratings = Math.round(ratings * 10) / 10
        setTotalRating(ratings);
        setTotalDownloads(downloads);
      }
  },[])

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
              <div class="col-lg-12">
                <div class="main-button" style={{marginTop: -30, marginBottom: 10}}>
                  <a href="javascript:;" onClick={() => {navigate("/Browse")}}>Back to Games...</a>
                </div>
              </div>
                      {/*<!-- ***** Featured Start ***** -->*/}
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="feature-banner header-text">
                                  <div class="row">
                                      <div class="col-lg-4">
                                          <img src="https://github.com/johnl0renz01/codepen-images/blob/main/resident-1.png?raw=true" alt="" style={{borderRadius: "23px"}} />
                                      </div>
                                      <div class="col-lg-8">
                                          <div class="thumb">
                                              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/418370/ss_d07fd9fca3644350782356667ce78d436c574680.600x338.jpg?t=1689654805" alt="" style={{borderRadius: "23px"}} />
                                              <a href="https://www.youtube.com/watch?v=RgYqQsbKn6w" target="_blank"><i class="fa fa-play"></i></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<!-- ***** Featured End ***** -->*/}

                      {/*<!-- ***** Details Start ***** -->*/}
                      <div class="game-details">
                          <div class="row">
                              <div class="col-lg-12">
                                  <h2>Resident Evil 7</h2>
                              </div>
                              <div class="col-lg-12">
                                  <div class="content">
                                      <div class="row">
                                          <div class="col-lg-6">
                                              <div class="left-info">
                                                  <div class="left">
                                                      <h4>Resident Evil 7</h4>
                                                      <span>Thriller/Survival</span>
                                                  </div>
                                                  <ul>
                                                  <li><i class="fa fa-star"></i> {totalRating}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads}</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="col-lg-6">
                                              <div class="right-info">
                                                  <ul>
                                                  <li><i class="fa fa-star"></i> {totalRating}</li>
                              <li><i class="fa fa-shopping-cart"></i> {totalDownloads}</li>
                                                      <li><i class="fa fa-server"></i> 24GB</li>
                                                      <li><i class="fa fa-gamepad"></i> Thriller/Survival</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://github.com/johnl0renz01/codepen-images/blob/main/resident-2.png?raw=true" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://github.com/johnl0renz01/codepen-images/blob/main/resident-3.png?raw=true" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://github.com/johnl0renz01/codepen-images/blob/main/resident-4.png?raw=truee" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-12">
                                              <p>
                                                  Ethan Winters, a civilian with an unknown background, is drawn to a derelict plantation in Dulvey, Louisiana, by a message from his wife Mia, who has been missing for the past three years.
                                                  Exploring a seemingly abandoned guest house, Ethan finds Mia imprisoned in the basement. She is distressed to see him, saying that she did not contact him at all. During their escape, Mia suddenly
                                                  goes berserk and attacks Ethan, forcing him to kill her.
                                              </p>
                                          </div>
                                          <div class="col-lg-12">
                                              <div class="main-border-button">
                                                  <a href="javascript:;" onClick={() => {addCart("Resident")}}>Add to Cart</a>
                                              </div>
                                          </div>
                                          <div class="col-lg-12" style={{marginTop: -20}}>
                                              <div class="main-border-button">
                                                  <a href="javascript:;" style={{background: `${reviewState ? "#b502a6" : ""}`, color: `${reviewState ? "white" : ""}`}} onClick={() => {if(!reviewState) { setReviewState(true); } else {setReviewState(false)}}}>{reviewState ? <>Hide</> : <>Show</>} Reviews</a>
                                              </div>
                                          </div>
                                          <div class="col-lg-12" style={{display: `${reviewState ? "" : "none"}`}}>
                                          {totalDownloads > 0 ? <>
                                                <div class="review-container">
                                                    {reviewList.map((currentReview, index) => (
                                                        <>
                                                            {currentReview.GameID == "Resident" ? 
                                                                <div className="user-review">
                                                                     <div className="user-info">
                                                                            <h5 style={{color: "#c200a1"}}>{currentReview.UserName}</h5>
                                                                            <h6> 
                                                                                <div style={{marginTop: "0.15rem"}} class="stars rate" data-percent={currentReview.UserRating == 1 ? "20"
                                                                                                                                    : currentReview.UserRating == 2 ? "40"
                                                                                                                                    : currentReview.UserRating == 3 ? "60"
                                                                                                                                    : currentReview.UserRating == 4 ? "80"
                                                                                                                                    : currentReview.UserRating == 5 ? "100" : <></>}>
                                                                                    <a title="Awful">★</a>
                                                                                    <a title="Ok">★</a>
                                                                                    <a title="Good">★</a>
                                                                                    <a title="Great">★</a>
                                                                                    <a title="Awesome">★</a>
                                                                                </div>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="review-text" >
                                                                            <p style={{color: "white", lineHeight: "20px"}}>{currentReview.UserComment}</p>
                                                                        </div>
                                                                </div> 
                                                            : <></>}
                                                        
                                                        </>
                                                    ))}
                                                </div>
                                                </> 
                                                : <h3 style={{textAlign: "center", marginTop: 20}}>There are no reviews.</h3>}
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<!-- ***** Details End ***** -->*/}

                      {/*<!-- ***** Other Start ***** -->*/}
                      <div class="other-games">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="heading-section">
                                      <h4><em>Other Related</em> Games</h4>
                                  </div>
                              </div>

                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Last_Of_Us")}}>
                                          <img src="https://assets-prd.ignimgs.com/2022/06/09/the-last-of-us-part-1-button-1654791855870.jpg?width=300&crop=1%3A1%2Csmart&auto=webp" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>The Last of Us</h4>
                                      <span>Survival</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 4.9</li>
                                          <li><i class="fa fa-shopping-cart"></i> 6.4M</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Forest")}}>
                                          <img src="https://static-sg.winudf.com/video/image/5e7b5f3b-640f-405e-bc68-ff0f6747d925.jpg" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>The Forest</h4>
                                      <span>Thriller/Survival</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 4.5</li>
                                          <li><i class="fa fa-shopping-cart"></i> 1.5M</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Slender_Arrival")}}>
                                          <img src="https://m.media-amazon.com/images/M/MV5BOGYzMWVhZDAtYjJjYi00NDFiLTg2OWItMWI5ZWJkYzM5MWM0XkEyXkFqcGdeQXVyNjgzODI5MzE@._V1_.jpg" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>Slender: The Arrival</h4>
                                      <span>Horror/Puzzle</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 4.8</li>
                                          <li><i class="fa fa-shopping-cart"></i> 4.8M</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Outlast_2")}}>
                                          <img src="https://ph-test-11.slatic.net/p/a4c01aa64066c857e7f57a52f9390975.jpg" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>Outlast 2</h4>
                                      <span>Horror/Action</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 4.8</li>
                                          <li><i class="fa fa-shopping-cart"></i> 3.1M</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Witcher_3")}}>
                                          <img src="https://www.regfiles.net/media/registry/registry/the-witcher-3-wild-hunt-gogcom-version-icon.webp" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>Witcher 3</h4>
                                      <span>Adventure/Action</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 5.0</li>
                                          <li><i class="fa fa-shopping-cart"></i> 7.9M</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Poppy_Playtime")}}>
                                          <img src="https://pbs.twimg.com/media/FBldV68XsA0U4Kj.jpg" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>Poppy Playtime</h4>
                                      <span>Horror/Puzzle</span>
                                      <ul>
                                          <li><i class="fa fa-star"></i> 4.6</li>
                                          <li><i class="fa fa-shopping-cart"></i> 3.5M</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<!-- ***** Other End ***** -->*/}
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

