import React from "react";
import "./Home.css";

import Footer from "../../Components_hub/Footer/Footer.jsx";

const style_marquee = {
  "--pause-on-hover": "paused",
  "--pause-on-click": "running",
};

const style_anime = {
  play: "running",
  direction: "normal",
  duration: "11.88s",
  delay: "0s",
  "iteration-count": "infinite",
};

const style_color = {
  "--gradient-color": "rgba(255, 255, 255, 1),rgba(255, 255, 255, 0)",
  "--gradient-width": "20px",
};

const Home = () => {
  return (
    <>
      <div className="container banner">
        <div className=" px-0 container">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner dimension">
              <div className="carousel-item active b1" data-bs-interval="3000">
                <img
                  src={require("./Home_images/campusA1.jpg")}
                  className="d-block w-100 h-10"
                  alt="sdcdcs"
                />
              </div>
              <div className="carousel-item b1" data-bs-interval="3000">
                <img
                  src={require("./Home_images/campusA3.jpg")}
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
              <div className="carousel-item b1">
                <img
                  src={require("./Home_images/campusA2.jpg")}
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <p className="lead mb-0"></p>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h1>
                  <strong className="d-inline-block mb-2 text-primary">
                    Campus-A
                  </strong>
                </h1>
                <p className="card-text mb-auto">
                  <li>New Boys</li>
                  <li>Kelat</li>
                  <li>kacchi colony waala</li>
                  <li>Berozgaaro waala</li>
                </p>
              </div>
              {/* <div className="col-auto d-none d-lg-block"> */}
              <div className="col-auto d-none d-lg-block img-fluid ">
                <img
                  className="responsive"
                  src={require("./Home_images/1.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h1>
                  <strong className="d-inline-block mb-2 text-success">
                    Campus-B
                  </strong>
                </h1>

                <br />
                <p className="mb-auto">
                  <li>FRK</li>
                  <li>SRK</li>
                  <li>BRA</li>
                </p>
              </div>
              <div className="col-auto d-none d-lg-block img-fluid ">
                <img
                  className="responsive"
                  src={require("./Home_images/logo.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card p-4 text-left">
          <div className="mb-4">
            <span>
              <img
                src="/static/media/logo.b2df34df.webp"
                alt=""
                className="hostel-logo"
              />
            </span>
            <span className="hostel-name ml-2">
              <h1>Hostel</h1>
            </span>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col mb-3">
                <div className="col-heading mb-2">
                  <h3>Social</h3>
                </div>
                <a
                  href="https://instagram.com/kailash.iitd?utm_medium=copy_link"
                  className="social mr-3"
                  target="_blank"
                >
                  <i
                    className="insta fa fa-instagram contact-icon"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/groups/463858693633547/?ref=share"
                  className="social"
                  target="_blank"
                >
                  <i
                    className="face fa fa-facebook contact-icon"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
              <div className="col mb-4">
                <div className="col-heading mb-2">
                  <h3>Complain</h3>
                </div>
                <button type="button" className="btn complain">
                  <a
                    // href="https://docs.google.com/forms/d/e/1FAIpQLSf7dUoNH8B8wCl1Gztt8yF73NdXx3u8LnE6RwWy8MPFqmv_nA/viewform"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScYMprPlonKV1-aiTVG9hbVGch2qPv03k1wojDiD1jVQtmUtA/viewform?usp=sf_link"
                    className="complain_link"
                    target="_blank"
                  >
                    Fill Complaint Form
                  </a>
                </button>
              </div>
              <div className="col mb-1">
                <div className="col-heading mb-1">
                  <h3>Location</h3>
                </div>
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1336181698575!2d77.27824811744384!3d28.56575009999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a574f24cb1%3A0xb07903a53c4f3db!2sNew%20Boys%20Hostel%20-%20JMI!5e0!3m2!1sen!2sin!4v1677773482807!5m2!1sen!2sin"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-container py-5">
          <h1 className="heading pb-4">Introduction</h1>
          Kailash hostel indeed consists of students filled with enthusiasm and
          hostel spirit. There's a constant urge for everyone to be a part and
          take the culture in Kailash to great heights. Be it the BHM trophy,
          BRCA trophy, BSA, BSP, Kailash has year over year proven to be worthy
          and has given a fierce front. The sigil painting, beautifully
          decorating the back entrance of Kailash won the first prize. Not only
          this, Kailash stood second in BHM trophy in 2019. Each resident of
          Kailash has contributed to this journey and has been a part and parcel
          of these achievements. The participation from Kailash increased
          tremendously not just in terms of numbers but also in terms of people
          becoming aware of their talents through regular workshops and
          intra-hostels events On the cultural front, Kailash now has a fully
          air-conditioned dance room, a music room and computer room. The
          visitor's room has been upgraded with new furniture! Not just that,
          Kailash has its own library. Now students do not have to be a part of
          the hustle of grabbing a seat at the library. Also, the parlor of
          Kailash is a lifesaver at times of need. This development is not just
          seen on the cultural front, but also in terms of infrastructure and
          the consciousness among residents. The foundation of a brimming sports
          culture has been set up in the last 5 years. A badminton court, a
          basketball court, a gym, development of Kailash Activity Center (KAC,
          analogous to indoor sports room) with TT table, carrom and other
          indoor games, other sports' equipment of optimum quality are also
          introduced to promote the sports' spirit among the female candidates.
          With the new guidelines being enforced, the maintenance issues have
          been resolved with two dustbins for wet and dry waste everywhere, hand
          wash in washroom &amp; soap holders in bathrooms. And how can one
          forget about Kamlesh bhaiya's juice shop, which now serves fruit
          chats, delicious sandwiches, finger licking poha and everyone's
          all-time favorite Maggi. Kuldeep bhaiya's shop is now no less than a
          supermarket now with all the utilities available right at a 50-meter
          distance for students. Kailash is catering all the needs of its
          residents to the best and tries its level best to ensure full comfort
          and warmth of students so that they can easily stay in the premises of
          IIT Delhi.
        </div>
        <div className="container py-5">
          <div className="heading pb-4 vision">
            <h1> Vision</h1>
            <p>
            To cater all the needs of its residents to make them feel Kailash like
           their second home and take the hostel culture to the sky.
          </p>
          </div>
          
         
        </div>

        <div className="chiefs">
          <div className="container py-5">
            <div className="heading">Student Team</div>
            <div
              className=" marquee-container my-element my-button:active "
              style={style_marquee}
            >
              <div className="overlay" style={style_color}></div>
              <div className="marquee" style={style_anime}>
                <div className="d-flex mb-5 mt-3">
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Yashasvi Ghadale</div>
                          <div className="profile-designation">
                            House Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:yashasvighadale@gmail.com"
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+918770332029">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Sanskrity Shaurya</div>
                          <div className="profile-designation">
                            Maintenance Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:sanskrityshaurya@gmail.com "
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+917004227645">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Vipasha</div>
                          <div className="profile-designation">
                            Mess Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:drvipasha.iitd@gmail.com"
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+919996991902">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="marquee" style={style_anime}>
                <div className="d-flex mb-5 mt-3">
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Yashasvi Ghadale</div>
                          <div className="profile-designation">
                            House Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:yashasvighadale@gmail.com"
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+918770332029">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Sanskrity Shaurya</div>
                          <div className="profile-designation">
                            Maintenance Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:sanskrityshaurya@gmail.com "
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+917004227645">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-5">
                    <div className="profile-card my-5">
                      <div
                        className="profile-image"
                        style={{ height: "300px", width: "300px" }}
                      >
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-blur h-100"
                        />
                        <img
                          src={require("./Home_images/img.jpg")}
                          alt=""
                          className="profile-img-main h-100"
                        />
                        <div className="profile-info px-3 py-3 text-left">
                          <div className="profile-name">Vipasha</div>
                          <div className="profile-designation">
                            Mess Secretary
                          </div>
                          <div className="social-icons">
                            <a className="social-icon" target="_blank">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a
                              className="social-icon"
                              href="mailto:drvipasha.iitd@gmail.com"
                            >
                              <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <a className="social-icon" href="tel:+919996991902">
                              <i
                                className="fa fa-phone-alt"
                                aria-hidden="true"
                              ></i>
                            </a>
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

        <div className="team-container">
          <div className="team-member">
            <h3>Team Member 1</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member1@example.com">member1@example.com</a>
            </p>
          </div>
          <div className="team-member">
            <h3>Team Member 2</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member2@example.com">member2@example.com</a>
            </p>
          </div>
          <div className="team-member">
            <h3>Team Member 3</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member3@example.com">member3@example.com</a>
            </p>
          </div>
          <div className="team-member">
            <h3>Team Member 4</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member4@example.com">member4@example.com</a>
            </p>
          </div>
          <div className="team-member">
            <h3>Team Member 5</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member5@example.com">member5@example.com</a>
            </p>
          </div>
          <div className="team-member">
            <h3>Team Member 6</h3>
            <p>
              Contact:{" "}
              <a href="mailto:member6@example.com">member6@example.com</a>
            </p>
          </div>
        </div>

        <div id="mess-menu" className="container-fluid my-5">
          <div className="heading pb-4">Mess Menu</div>
          <div className="container menu my-2 text-center">
            <div id="marker"></div>
            <div className="row text-center">
              <div className="col-0 col-lg-2"></div>
              <div className="col p-0 mb-3">
                <a className="link1 active" href="/">
                  Monday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/">
                  Tuesday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/">
                  Wednesday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/">
                  Thursday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/">
                  Friday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/">
                  Saturday
                </a>
              </div>
              <div className="col p-0 mb-3">
                <a className="link1" href="/hostel/kailash/">
                  Sunday
                </a>
              </div>
              <div className="col-0 col-lg-2"></div>
            </div>
          </div>
          <div id="menu-container" className="container mt-4">
            <div className="full-width">
              <div className="row full-width ">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3 ">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Stuffed Parantha, Tomato chutney, Achar, Sprouts,
                      Cornflakes
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Gobhi, Dal makhani, Mint chhach, Lemon Rice, roti
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Tea, bread, jam,Tea, bread, jam,Tea, bread, jam
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Rice, Roti, Malai Kofta, Palak, chana Dal, Fruit Custurd
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Vada/idli, sambhar, coconut chutney, veg sandwich, fruit
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Matar paneer, Dal Moong Chilka, Rice, Dahi-bhalle, Roti
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Coffee Bread, jam
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Aloo Parantha, Cholle, rice, Green chutney, Cold Kheer
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Upma/namkeen Semiya, Omelett, Conrflakes, Sprouts
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Kadi Pakoda, Zeera aloo, Tawa roti, green chutney, rice,
                      papad
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Lemonade
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Manchurian, Noodle, Pasta, Spring roll, Cocktail samosa,
                      Dal mix sabut, tawa roti
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Poha with sev, Conrflakes, Boiled egg, Fuit oats
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Aloo beans/capsicum aloo, Razma, Lassi, Roti, Zeera rice
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Tea, Bread, Jam
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Paneer Bhruji, Egg curry, Dal urad chana, rice , roti,
                      cham cham
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Paneer stuffed chilla, Boiled egg, seviyan sweet, Lemon
                      pepper corn, Fruit
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Lauki kofta, rice, moong dal, boondi raita, roti
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Coffee, bread, jam
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Kadhai/jalfrezi - paneer, Dal kali masoor, rice, roti,
                      Jalebi Rabri
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Tikona parantha, aloo sabji, sooji halwa, fruit
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      rice, veg korma, panchmel dal, roti, curd green, chutney,
                      papad
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Lemonade
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Pao bhaji/kachori sabji, rice , dal arhar, pastry, roti
                    </div>
                  </div>
                </div>
              </div>
              <div className="row full-width d-none">
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Breakfast</div>
                    </div>
                    <div className="meal-time mt-2">07:30 AM - 09:30 AM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Dosa, sambhar, cocnut chutney, cornflakes, fruits
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Lunch</div>
                    </div>
                    <div className="meal-time mt-2">12:00 PM - 02:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Pindi/yellow cholle, bhature/palak puri, kulche, rice,
                      curd
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Evening Snack</div>
                    </div>
                    <div className="meal-time mt-2">04:30 PM - 05:30 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Tea, bread, jam
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="box mx-0 my-3 px-4 py-3">
                    <div>
                      <i
                        className="fas fa-utensils pr-2"
                        aria-hidden="true"
                      ></i>
                      <div className="meal-name d-inline">Dinner</div>
                    </div>
                    <div className="meal-time mt-2">07:00 PM - 09:00 PM </div>
                    <div className="mess-items mt-2 font-size-smaller">
                      Veg biryani, egg biryani, Mix raita, green chutney, Aloo
                      soya bean, roti, rasmalai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
