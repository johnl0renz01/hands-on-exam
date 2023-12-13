import logo from '../logo.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();

  const changeLink = (link) => {
    window.sessionStorage.setItem("CURRENT_LINK", JSON.stringify(link));
    navigate(`/${link}`);
  }

  useEffect(()=> {
    document.title = "Home"
  },[])
  

  return (
    <div classname="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="page-content">
            <div class="main-banner">
              <div class="row">
                <div class="col-lg-7">
                  <div class="header-text banner-text">
                    <h6>Welcome To Rebel Grounds</h6>
                    <h4><em>Explore</em> For Reputable Games Here!</h4>
                    <div class="main-button">
                      <a href="javascript:;" onClick={() => {changeLink("Browse")}}>Explore Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="live-stream">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Game</em> Reviews</h4>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <div class="thumb">
                      <img src="https://github.com/johnl0renz01/codepen-images/blob/main/stream-1.png?raw=true" alt="stream-1"/>
                      <div class="hover-effect">
                        <div class="content">
                          <div class="live">
                            <a href="#">Watch</a>
                          </div>
                          <ul>
                            <li>
                              <a href="#">68.2K</a>
                            </li>
                            <li>
                              <a href="#">PUBG</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="down-content">
                      <div class="avatar"><img src="assets/images/avatar-01.jpg" alt="avatar-01" class="imgAvatar"/></div><span>PewDiePie</span>
                      <h4>Just Shooting my Rival - PUBG</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <div class="thumb">
                      <img src="https://github.com/johnl0renz01/codepen-images/blob/main/stream-3.png?raw=true" alt="stream-3"/>
                      <div class="hover-effect">
                        <div class="content">
                          <div class="live">
                            <a href="#">Watch</a>
                          </div>
                          <ul>
                            <li>
                              <a href="#">26.2K</a>
                            </li>
                            <li>
                              <a href="#">Cyberpunk</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="down-content">
                      <div class="avatar"><img src="assets/images/avatar-02.jpg" alt="avatar-02" class="imgAvatar"/></div><span>Jacksepticeye</span>
                      <h4>Cyberpunk 36 Hours Honest Review</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <div class="thumb">
                      <img src="https://github.com/johnl0renz01/codepen-images/blob/main/stream-2.png?raw=true" alt="stream-2"/>
                      <div class="hover-effect">
                        <div class="content">
                          <div class="live">
                            <a href="#">Watch</a>
                          </div>
                          <ul>
                            <li>
                              <a href="#">13.7K</a>
                            </li>
                            <li>
                              <a href="#">Bee Simulator</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="down-content">
                      <div class="avatar"><img src="assets/images/avatar-03.jpg" alt="avatar-03" class="imgAvatar"/></div><span>Markiplier</span>
                      <h4>Playing Bee Simulator Chillin'</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                  <div class="item">
                    <div class="thumb">
                      <img src="https://github.com/johnl0renz01/codepen-images/blob/main/stream-4.png?raw=true" alt="stream-4"/>
                      <div class="hover-effect">
                        <div class="content">
                          <div class="live">
                            <a href="#">Watch</a>
                          </div>
                          <ul>
                            <li>
                              <a href="#">37.2K</a>
                            </li>
                            <li>
                              <a href="#">Minecraft</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="down-content">
                      <div class="avatar"><img src="assets/images/avatar-02.jpg" alt="avatar-02" class="imgAvatar"/></div><span>MrBeast</span>
                      <h4>Minecraft Till Morning.</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="main-button">
                    <a href="#">Discover All Reviews</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="gaming-library">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>Game</em> Library</h4>
                </div>
                <div class="item">
                  <ul>
                    <li><img src="https://image.api.playstation.com/cdn/UP0700/CUSA05929_00/BCXhBnr9X5jjilzuc5tyv7GOcBukog6V.png" alt="BCXhBnr9X5jjilzuc5tyv7GOcBukog6V" class="templatemo-item"/></li>
                    <li>
                      <h4>Little Nightmares</h4><span>Horror</span>
                    </li>
                    <li>
                      <h4>Date Purchased</h4><span>10/24/2023</span>
                    </li>
                    <li>
                      <h4>Hours Played</h4><span>2 H 31 Mins</span>
                    </li>
                    <li>
                      <h4>Currently</h4><span>Reviewed</span>
                    </li>
                    <li>
                      <div class="main-border-button border-no-active">
                        <a href="#">Reviewed</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="item">
                  <ul>
                    <li><img src="https://www.giantbomb.com/a/uploads/original/8/87790/3027477-box_jc4.png" alt="3027477-box_jc4" class="templatemo-item"/></li>
                    <li>
                      <h4>Just Cause 4</h4><span>Sandbox</span>
                    </li>
                    <li>
                      <h4>Date Purchased</h4><span>06/22/2020</span>
                    </li>
                    <li>
                      <h4>Hours Played</h4><span>536 H 52 Mins</span>
                    </li>
                    <li>
                      <h4>Currently</h4><span>Reviewed</span>
                    </li>
                    <li>
                      <div class="main-border-button border-no-active">
                        <a href="#">Reviewed</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="item last-item">
                  <ul>
                    <li><img src="https://images.pushsquare.com/841dda4040d82/assassins-creed-liberation-hd-cover.cover_large.jpg" alt="assassins-creed-liberation-hd-cover" class="templatemo-item"/></li>
                    <li>
                      <h4>Assassin's Creed Liberation</h4><span>Action</span>
                    </li>
                    <li>
                      <h4>Date Purchased</h4><span>04/30/2019</span>
                    </li>
                    <li>
                      <h4>Hours Played</h4><span>32 H 14 Mins</span>
                    </li>
                    <li>
                      <h4>Currently</h4><span>Reviewed</span>
                    </li>
                    <li>
                      <div class="main-border-button border-no-active">
                        <a href="#">Reviewed</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="main-button">
                  <a href="#">View Your Library</a>
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

