
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSystem from "../CartSystem";

export default function Last_Of_Us() {
  const navigate = useNavigate();

  useEffect(()=> {
    document.title = "The Last of Us"
  },[])

  const [totalRating, setTotalRating] = useState("");
  const [totalDownloads, setTotalDownloads] = useState(0);

  const [reviewState, setReviewState] = useState(false);
  const [reviewList, setReviewList] = useState([]);

  const [allRating, setAllRating] = useState([]);
  const [allDownloads, setAllDownloads] = useState([]);

  useEffect(()=> {
    var all_rates = JSON.parse(localStorage.getItem("TOTAL_RATING"));
    var all_downloads = JSON.parse(localStorage.getItem("TOTAL_DOWNLOADS"));
    if (all_rates !== null && all_downloads !== null) {
      setAllRating(all_rates);
      setAllDownloads(all_downloads);
    }
    
    var reviews = [];
    var downloads = 0;
    var ratings = 0;
    var gameReviews = JSON.parse(localStorage.getItem("GAME_REVIEWS"));
      if (gameReviews !== null) {
        reviews = gameReviews;
        setReviewList(reviews);

        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].GameID == "Last") {
                downloads ++;
                if (reviews[i].UserRating !== undefined) {
                    ratings += parseInt(reviews[i].UserRating);
                }
            }
        }
        if (ratings > 0) {
            ratings = ratings / downloads;
            ratings = Math.round(ratings * 10) / 10
          }
         
          if (ratings == 0) {
            setTotalRating("N/A");
          } else {
            setTotalRating(ratings);
          }
          
          setTotalDownloads(downloads);
      } else {
        if (ratings == 0) {
            setTotalRating("N/A");
          } else {
            setTotalRating(ratings);
          }
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
                                          <img src="https://static01.nyt.com/images/2023/01/15/multimedia/15lastofus1-1-4a0f/15lastofus1-1-4a0f-square640.jpg" alt="" style={{borderRadius: "23px"}} />
                                      </div>
                                      <div class="col-lg-8">
                                          <div class="thumb">
                                              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/ss_e67d2ca76b0c8985a3615afb38c21e893df73272.600x338.jpg?t=1697567304" alt="" style={{borderRadius: "23px"}} />
                                              <a href="https://www.youtube.com/watch?v=W01L70IGBgE" target="_blank"><i class="fa fa-play"></i></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*<!-- ***** Featured End ***** -->*/} {/*<!-- ***** Details Start ***** -->*/}
                      <div class="game-details">
                          <div class="row">
                              <div class="col-lg-12">
                                  <h2>The Last of Us</h2>
                              </div>
                              <div class="col-lg-12">
                                  <div class="content">
                                      <div class="row">
                                          <div class="col-lg-6">
                                              <div class="left-info">
                                                  <div class="left">
                                                      <h4>The Last of Us</h4>
                                                      <span>Survival</span>
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
                                                      <li><i class="fa fa-server"></i> 79GB</li>
                                                      <li><i class="fa fa-gamepad"></i> Survival</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://helios-i.mashable.com/imagery/articles/06tXEPHHYnijAgTfIDoO6rG/hero-image.fill.size_1200x1200.v1675879995.png" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-4">
                                              <img
                                                  src="https://assetsio.reedpopcdn.com/the-last-of-us-part-1-safe-combinations.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
                                                  alt=""
                                                  style={{borderRadius: "23px", marginBottom: "30px"}}
                                              />
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://cdn.openart.ai/stable_diffusion/db25659ae9ab7117afb0ee89361aa2698c466998_2000x2000.webp" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-12">
                                              <p>
                                                  An outbreak of a mutant Cordyceps fungus ravages the United States, transforming its human hosts into aggressive creatures. In the suburbs of Austin, Texas, Joel flees the chaos with his brother,
                                                  Tommy, and daughter, Sarah. As they flee, Sarah is shot by a soldier and dies in Joel's arms. Twenty years later, civilization has been decimated by the infection.
                                              </p>
                                          </div>
                                          <div class="col-lg-12">
                                              <div class="main-border-button">
                                                  <a href="javascript:;" onClick={() => {addCart("Last")}}>Add to Cart</a>
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
                                                                {currentReview.GameID == "Last" ? 
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
                      {/*<!-- ***** Details End ***** -->*/} {/*<!-- ***** Other Start ***** -->*/}
                      <div class="other-games">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="heading-section">
                                      <h4><em>Other Related</em> Games</h4>
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
                                        <li><i class="fa fa-star"></i> {allRating[1]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[1]}</li>
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
                                        <li><i class="fa fa-star"></i> {allRating[9]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[9]}</li>
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
                                        <li><i class="fa fa-star"></i> {allRating[5]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[5]}</li>
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
                                        <li><i class="fa fa-star"></i> {allRating[10]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[10]}</li>
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
                                        <li><i class="fa fa-star"></i> {allRating[6]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[6]}</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-lg-6">
                                  <div class="item">
                                      <a href="javascript:;" onClick={() => {navigate("/Resident_Evil_7")}}>
                                          <img src="https://i.redd.it/9pkjldbqb3sa1.jpg" alt="" class="templatemo-item" />
                                      </a>
                                      <h4>Resident Evil 7</h4>
                                      <span>Thriller/Survival</span>
                                      <ul>
                                        <li><i class="fa fa-star"></i> {allRating[8]}</li>
                                        <li><i class="fa fa-shopping-cart"></i> {allDownloads[8]}</li>
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

