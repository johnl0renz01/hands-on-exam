

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartSystem from "../CartSystem";


export default function GTA_5() {
  const navigate = useNavigate();

  useEffect(()=> {
    document.title = "Grand Theft Auto V"
  },[])

  const [totalRating, setTotalRating] = useState("");
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
            if (reviews[i].GameID == "GTA5") {
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
                                          <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/24/768x768/square_gaming-gta-5-screenshot-4.jpg?crop=1xw:1.0xh;center,top&resize=1200:*" alt="" style={{borderRadius: "23px"}} />
                                      </div>
                                      <div class="col-lg-8">
                                          <div class="thumb">
                                              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/ss_9efa694175609b73e9d3dca54190cbd8f6a0bc60.1920x1080.jpg?t=1695060909" alt="" style={{borderRadius: "23px"}} />
                                              <a href="https://www.youtube.com/watch?v=QkkoHAzjnUs" target="_blank"><i class="fa fa-play"></i></a>
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
                                  <h2>Grand Theft Auto V</h2>
                              </div>
                              <div class="col-lg-12">
                                  <div class="content">
                                      <div class="row">
                                          <div class="col-lg-6">
                                              <div class="left-info">
                                                  <div class="left">
                                                      <h4>Grand Theft Auto V</h4>
                                                      <span>Action/Sandbox</span>
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
                                                      <li><i class="fa fa-server"></i> 95GB</li>
                                                      <li><i class="fa fa-gamepad"></i> Action/Sandbox</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/24/768x768/square_gaming-gta-5-screenshot-6.jpg" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/34/768x768/square_gaming-grand-theft-auto-5-screenshot-new-4.jpg" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-4">
                                              <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/46/768x768/square_gaming_gta_v_new_screens_11.jpg" alt="" style={{borderRadius: "23px", marginBottom: "30px"}} />
                                          </div>
                                          <div class="col-lg-12">
                                              <p>
                                                  In 2004, Michael Townley, Trevor Philips, and Brad Snider partake in a failed robbery in Ludendorff, North Yankton, resulting in Michael being presumed dead. Nine years later, Michael lives with
                                                  his family in the city of Los Santos under the alias Michael De Santa, having made a secret agreement with the Federal Investigation Bureau (FIB) agent Dave Norton to stay hidden. Across town,
                                                  gangster Franklin Clinton works for a corrupt car salesman and meets Michael while attempting to fraudulently repossess his son's car.
                                              </p>
                                          </div>
                                          <div class="col-lg-12">
                                              <div class="main-border-button">
                                                  <a href="javascript:;" onClick={() => {addCart("GTA5")}}>Add to Cart</a>
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
                                                            {currentReview.GameID == "GTA5" ? 
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
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

