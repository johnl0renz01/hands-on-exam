

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSystem from "../CartSystem";

export default function Dark_Souls_3() {
  const navigate = useNavigate();

  useEffect(()=> {
    document.title = "Dark Souls 3"
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
            if (reviews[i].GameID == "Dark") {
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
            

            <div class="row">
              <div class="col-lg-12">
                <div class="feature-banner header-text">
                  <div class="row">
                    <div class="col-lg-4">
                      <img
                        src="https://github.com/johnl0renz01/codepen-images/blob/main/dark-1.png?raw=true"
                        alt=""
                        style={{borderRadius: "23px"}}
                      />
                    </div>
                    <div class="col-lg-8">
                      <div class="thumb">
                        <img
                          src="https://cdn.cloudflare.steamstatic.com/steam/apps/374320/ss_5efd318b85a3917d1c6e717f4cb813b47547cd6f.600x338.jpg?t=1682651227"
                          alt=""
                          style={{borderRadius: "23px"}}
                        />
                        <a
                          href="https://www.youtube.com/watch?v=cWBwFhUv1-8"
                          target="_blank"
                          ><i class="fa fa-play"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="game-details">
              <div class="row">
                <div class="col-lg-12">
                  <h2>Dark Souls 3</h2>
                </div>
                <div class="col-lg-12">
                  <div class="content">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="left-info">
                          <div class="left">
                            <h4>Dark Souls 3</h4>
                            <span>Adventure/RPG</span>
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
                            <li><i class="fa fa-server"></i> 25GB</li>
                            <li><i class="fa fa-gamepad"></i> Adventure/RPG</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <img
                          src="https://cdn.vox-cdn.com/thumbor/XcC5sTudrGxvDAHPaADAl9t3F9g=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13042311/Farron_Keep.0.0.1484686545.jpg"
                          alt=""
                          style={{borderRadius: "23px", marginBottom: "30px"}}
                        />
                      </div>
                      <div class="col-lg-4">
                        <img
                          src="https://github.com/johnl0renz01/codepen-images/blob/main/dark-2.png?raw=true"
                          alt=""
                          style={{borderRadius: "23px", marginBottom: "30px"}}
                        />
                      </div>
                      <div class="col-lg-4">
                        <img
                          src="https://github.com/johnl0renz01/codepen-images/blob/main/dark-3.png?raw=true"
                          alt=""
                          style={{borderRadius: "23px", marginBottom: "30px"}}
                        />
                      </div>
                      <div class="col-lg-12">
                        <p>
                          Dark Souls 3 takes place in a transitory place,
                          revolving around the first flame and the cycle of fire
                          and dark. You play as a protagonist whose goal is to
                          find and return the five Lords of Cinder to their
                          thrones at Firelink Shrine in order to link the flame
                          again. The protagonist is known as an Unkindled, a
                          kind of Undead, although it is never fully enunciated
                          upon what differentiates an Unkindled from other
                          Undead. There are implications that an Unkindled is
                          the remains of an Undead warrior who failed to link
                          the flame and, as a result, burned their bodies into
                          ash.
                        </p>
                      </div>
                      <div class="col-lg-12">
                                              <div class="main-border-button">
                                                  <a href="javascript:;" onClick={() => {addCart("Dark")}}>Add to Cart</a>
                                              </div>
                                          </div>
                                          <div class="col-lg-12" style={{marginTop: -20}}>
                                              <div class="main-border-button">
                                                  <a href="javascript:;" style={{background: `${reviewState ? "#b502a6" : ""}`, color: `${reviewState ? "white" : ""}`}} onClick={() => {if(!reviewState) { setReviewState(true); } else {setReviewState(false)}}}>{reviewState ? <>Hide</> : <>Show</>} Reviews</a>
                                              </div>
                                          </div>
                                          <div class="col-lg-12"style={{display: `${reviewState ? "" : "none"}`}}>
                                          {totalDownloads > 0 ? <>
                                                <div class="review-container">
                                                  {reviewList.length > 0 ? <></> : <></>}
                                                    {reviewList.map((currentReview, index) => (
                                                        <>
                                                            {currentReview.GameID == "Dark" ? 
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

            <div class="other-games">
              <div class="row" >
                <div class="col-lg-12">
                  <div class="heading-section">
                    <h4><em>Other Related</em> Games</h4>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="item">
                    <a href="javascript:;" onClick={() => {navigate("/Outlast_2")}}>
                      <img
                        src="https://ph-test-11.slatic.net/p/a4c01aa64066c857e7f57a52f9390975.jpg"
                        alt=""
                        class="templatemo-item"
                      />
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
                      <img
                        src="https://www.regfiles.net/media/registry/registry/the-witcher-3-wild-hunt-gogcom-version-icon.webp"
                        alt=""
                        class="templatemo-item"
                      />
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
                      <img
                        src="https://pbs.twimg.com/media/FBldV68XsA0U4Kj.jpg"
                        alt=""
                        class="templatemo-item"
                      />
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
                      <img
                        src="https://i.redd.it/9pkjldbqb3sa1.jpg"
                        alt=""
                        class="templatemo-item"
                      />
                    </a>
                    <h4>Resident Evil 7</h4>
                    <span>Thriller/Survival</span>
                    <ul>
                      <li><i class="fa fa-star"></i> {allRating[8]}</li>
                      <li><i class="fa fa-shopping-cart"></i> {allDownloads[8]}</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="item">
                    <a href="javascript:;" onClick={() => {navigate("/Last_Of_Us")}}>
                      <img
                        src="https://assets-prd.ignimgs.com/2022/06/09/the-last-of-us-part-1-button-1654791855870.jpg?width=300&crop=1%3A1%2Csmart&auto=webp"
                        alt=""
                        class="templatemo-item"
                      />
                    </a>
                    <h4>The Last of Us</h4>
                    <span>Survival</span>
                    <ul>
                      <li><i class="fa fa-star"></i> {allRating[3]}</li>
                      <li><i class="fa fa-shopping-cart"></i> {allDownloads[3]}</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="item">
                    <a href="javascript:;" onClick={() => {navigate("/Forest")}}>
                      <img
                        src="https://static-sg.winudf.com/video/image/5e7b5f3b-640f-405e-bc68-ff0f6747d925.jpg"
                        alt=""
                        class="templatemo-item"
                      />
                    </a>
                    <h4>The Forest</h4>
                    <span>Thriller/Survival</span>
                    <ul>
                      <li><i class="fa fa-star"></i> {allRating[1]}</li>
                      <li><i class="fa fa-shopping-cart"></i> {allDownloads[1]}</li>
                    </ul>
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

