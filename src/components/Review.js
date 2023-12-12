import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import $ from 'jquery';

export default function Review() {
  const navigate = useNavigate();

  const changeLink = (link) => {
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify(link));
    navigate(`/${link}`);
  }

  const [products, setProducts] = useState([]);

  const [r, setR] = useState([]);
  
  var reviews = [];


  useEffect(() => {
    var objects = {};
    var gameCart = JSON.parse(window.localStorage.getItem("CART"));
    var gameList = [];

    if (gameCart !== null) {
      gameCart = gameCart.replace(/"/g, "");
      gameCart = gameCart.replace(/\\/g, "");
      gameList = gameCart.split(",");
      setProducts(gameList);

      var gameReviews = JSON.parse(localStorage.getItem("GAME_REVIEWS"));
      if (gameReviews !== null) {
        reviews = gameReviews;
        setR(reviews);
      }

      console.log(reviews)

      /*
      for (var x = 0; x < gameList.length; x++) {
         
        //objects[x] = {["GameID"]: gameList[x], ["Name"]: "", ["Rating"]: "",  ["Comment"]: ""};
      }
      */
     
    }
  },[]);

  function clearStorage() {
    localStorage.clear();
  }
  


  function reviewCard(gameID, imgLink, gameTitle, currentIndex) {

    return (
      <div class="add-review-card" >
          <div class="product-image" style={{width: 140, marginRight: 10}}>
            <img src={imgLink}/>
          </div>
          <div >
            <h6 style={{display: "flex"}}>
                <p style={{color: "white", marginRight: 5, fontSize: 17}}>Game:</p>
                <p style={{color: "#c200a1", fontSize: 20}}>{gameTitle}</p>
            </h6>
            <h6 style={{display: "flex", width: 187}}>
                <p style={{color: "white", marginRight: 5, fontSize: 17}}>Rating:</p>
                <div id={gameID} class="stars rate" data-percent="0">
                  <a title="Awful" style={{position: "relative"}}><input type='radio' onClick={() => {ratingChange(gameID, "20")}} name={`${gameID}Rating`} value="1" style={{position: "absolute", top: 10, cursor: "pointer"}} required/>★</a>
                  <a title="Ok" style={{position: "relative"}}><input type='radio' onClick={() => {ratingChange(gameID, "40")}} name={`${gameID}Rating`} value="2" style={{position: "absolute", top: 10, cursor: "pointer"}} />★</a>
                  <a title="Good" style={{position: "relative"}}><input type='radio' onClick={() => {ratingChange(gameID, "60")}} name={`${gameID}Rating`} value="3" style={{position: "absolute", top: 10, cursor: "pointer"}} />★</a>
                  <a title="Great" style={{position: "relative"}}><input type='radio' onClick={() => {ratingChange(gameID, "80")}} name={`${gameID}Rating`} value="4" style={{position: "absolute", top: 10, cursor: "pointer"}} />★</a>
                  <a title="Awesome" style={{position: "relative"}}><input type='radio' onClick={() => {ratingChange(gameID, "100")}} name={`${gameID}Rating`} value="5" style={{position: "absolute", top: 10, cursor: "pointer"}} />★</a>
                </div>
            </h6>
            <textarea maxlength="200" name={`${gameID}Comment`} placeholder='Please enter your comments...' required></textarea>
          </div>
        </div>
    );
  }

  function ratingChange(gameID, change) {
    try {
      console.log(gameID + " " + change)
      $(`#${gameID}`).attr('data-percent', change);
      //document.getElementById(gameID). = 5;
    } catch {

    }
    
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    console.log(formData)
    console.log(formProps)

    console.log(formProps.User)
    console.log(formProps.GTA5Comment)

    reviews = r;

    if (formProps.MinecraftComment) {
      reviews = [...reviews,{
        GameID: "Minecraft",
        UserName: formProps.User,
        UserRating: formProps.MinecraftRating,
        UserComment: formProps.MinecraftComment,
        }];
    }

    if (formProps.GTA5Comment) {
      reviews = [...reviews,{
        GameID: "GTA5",
        UserName: formProps.User,
        UserRating: formProps.GTA5Rating,
        UserComment: formProps.GTA5Comment,
        }];
    }

    if (formProps.PUBGComment) {
      reviews = [...reviews,{
        GameID: "PUBG",
        UserName: formProps.User,
        UserRating: formProps.PUBGRating,
        UserComment: formProps.PUBGComment,
        }];
    }

    if (formProps.SlenderComment) {
      reviews = [...reviews,{
        GameID: "Slender",
        UserName: formProps.User,
        UserRating: formProps.SlenderRating,
        UserComment: formProps.SlenderComment,
        }];
    }

    if (formProps.OutlastComment) {
      reviews = [...reviews,{
        GameID: "Outlast",
        UserName: formProps.User,
        UserRating: formProps.OutlastRating,
        UserComment: formProps.OutlastComment,
        }];
    }

    if (formProps.WitcherComment) {
      reviews = [...reviews,{
        GameID: "Witcher",
        UserName: formProps.User,
        UserRating: formProps.WitcherRating,
        UserComment: formProps.WitcherComment,
        }];
    }

    if (formProps.PoppyComment) {
      reviews = [...reviews,{
        GameID: "Poppy",
        UserName: formProps.User,
        UserRating: formProps.PoppyRating,
        UserComment: formProps.PoppyComment,
        }];
    }

    if (formProps.ResidentComment) {
      reviews = [...reviews,{
        GameID: "Resident",
        UserName: formProps.User,
        UserRating: formProps.ResidentRating,
        UserComment: formProps.ResidentComment,
        }];
    }

    if (formProps.LastComment) {
      reviews = [...reviews,{
        GameID: "Last",
        UserName: formProps.User,
        UserRating: formProps.LastRating,
        UserComment: formProps.LastComment,
        }];
    }

    if (formProps.ForestComment) {
      reviews = [...reviews,{
        GameID: "Forest",
        UserName: formProps.User,
        UserRating: formProps.ForestRating,
        UserComment: formProps.ForestComment,
        }];
    }

    if (formProps.DarkComment) {
      reviews = [...reviews,{
        GameID: "Dark",
        UserName: formProps.User,
        UserRating: formProps.DarkRating,
        UserComment: formProps.DarkComment,
        }];
    }
    
    localStorage.setItem("GAME_REVIEWS", JSON.stringify(reviews));

    alert("Thank you for your kind feedback!")
    var temp = JSON.parse(window.localStorage.getItem("GAME_REVIEWS"));
    clearStorage();
    localStorage.setItem("GAME_REVIEWS", JSON.stringify(temp))
    navigate("/Home")
    console.log(reviews);
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
                                  Write Your Product Reviews
                                </h4>
                            </div>
                        </div>
                    </div>

                      <div class="live-stream" style={{marginTop: 30}}>
                        <form action="" onSubmit={handleSubmit}>
                          <div class="finish-details">
                            <h3 style={{color: "#c200a1"}}>
                              Help us improve our page:
                            </h3>
                            <p>Giving review contribute to building trust and credibility. Positive reviews highlight product 
                              features and benefits. Additionally, constructive criticism in reviews helps identify areas for improvement, 
                              fostering a responsive and customer-centric approach that can enhance overall product quality and satisfaction.
                              Thank you.
                              </p>
                              <br/>
                              <h4>Reviewer Name:</h4>

                              <input type="text" name="User" placeholder='Input your name...' required/>
                              <br /><br />
                              {products.length > 0 ? 
                                <>
                                  {products.map((currentProduct, index) => (
                                  <div key={index}>
                                    {currentProduct == "Minecraft" ? <>{reviewCard("Minecraft", "https://wallpaperaccess.com/full/4245098.jpg", "Minecraft", index)}</> 
                                    : currentProduct == "GTA5" ? <>{reviewCard("GTA5", "https://media.gq.com/photos/55828635e52bc4b477a96a7b/1:1/w_500,h_500,c_limit/blogs-the-feed-grand-theft-auto-gta-5.jpg", "Grand Theft Auto V", index)}</> 
                                    : currentProduct == "PUBG" ? <>{reviewCard("PUBG", "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MTI2NDM0OTk2OTg3MTk1/games-like-pubg-.jpg", "PUBG: Battlegrounds", index)}</> 
                                    : currentProduct == "Slender" ? <>{reviewCard("Slender", "https://m.media-amazon.com/images/M/MV5BOGYzMWVhZDAtYjJjYi00NDFiLTg2OWItMWI5ZWJkYzM5MWM0XkEyXkFqcGdeQXVyNjgzODI5MzE@._V1_.jpg", "Slender: The Arrival", index)}</> 
                                    : currentProduct == "Outlast" ? <>{reviewCard("Outlast", "https://ph-test-11.slatic.net/p/a4c01aa64066c857e7f57a52f9390975.jpg", "Outlast 2", index)}</> 
                                    : currentProduct == "Witcher" ? <>{reviewCard("Witcher", "https://www.regfiles.net/media/registry/registry/the-witcher-3-wild-hunt-gogcom-version-icon.webp", "Witcher 3", index)}</> 
                                    : currentProduct == "Poppy" ? <>{reviewCard("Poppy", "https://pbs.twimg.com/media/FBldV68XsA0U4Kj.jpg", "Poppy Playtime", index)}</> 
                                    : currentProduct == "Resident" ? <>{reviewCard("Resident", "https://i.redd.it/9pkjldbqb3sa1.jpg", "Resident Evil 7", index)}</> 
                                    : currentProduct == "Last" ? <>{reviewCard("Last", "https://assets-prd.ignimgs.com/2022/06/09/the-last-of-us-part-1-button-1654791855870.jpg?width=300&crop=1%3A1%2Csmart&auto=webp", "The Last of Us", index)}</> 
                                    : currentProduct == "Forest" ? <>{reviewCard("Forest", "https://static-sg.winudf.com/video/image/5e7b5f3b-640f-405e-bc68-ff0f6747d925.jpg", "The Forest", index)}</> 
                                    : currentProduct == "Dark" ? <>{reviewCard("Dark", "https://ass ets2.ignimgs.com/2015/06/15/dark-souls-3-buttonjpg-a5759a.jpg", "Dark Souls 3", index)}</> 
                                    : <></>
                                    }
                                  </div> 
                                  ))}
                                </>
                              : <></> }
                              
                              <p>
                              Thank you for expressing your thoughts and experiences by writing a review. 
                              Your feedback is incredibly valuable to us and to other potential customers. 
                              You contribute to the growth and improvement of our products/services, and we sincerely appreciate your cooperation in helping us create a better experience for everyone.
                              </p>
                              <br/>
                          </div>
                          <div style={{display: "flex", justifyContent: "end"}}>
                              <button type="submit" class="finish">
                                  Submit Review
                              </button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

