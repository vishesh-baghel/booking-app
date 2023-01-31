import "./hotel.css";
import { useState } from "react";
import NavBar from "../../Components/navBar/NavBar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  function handleOpen(i) {
    setOpen(true);
    setSlideNumber(i);
  }

  function handleMove(movement) {
    if (movement === "l") {
      if (slideNumber === 0) {
        setSlideNumber(photos.length - 1);
      } else {
        setSlideNumber(slideNumber - 1);
      }
    } else {
      if (slideNumber === photos.length - 1) {
        setSlideNumber(0);
      } else {
        setSlideNumber(slideNumber + 1);
      }
    }
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="hotelImgSlider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => {
                handleMove("l");
              }}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => {
                handleMove("r");
              }}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Hotel Grand</h1>
          <button className="hotelBookBtn">Book Now</button>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Address: 1234, Main Street, New York</span>
          </div>
          <div className="hotelDistance">
            Excellent Location- 500m from center
          </div>
          <div className="hotelPriceHighlight">
            Book a stay over ₹2000 and get a free airport taxi
          </div>
          <div className="hotelImg">
            {photos.map((photo, i) => (
              <div className="hotelImageWrapper">
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImgInside"
                  onClick={() => {
                    handleOpen(i);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="hotelDescription">
            <div className="hotelText">
              <h1>Stay in the heart of Delhi</h1>
              <p>
                Featuring 4-star accommodations, SCOOVEY The BMK Hotel &
                Banquets is located in New Delhi, 6.6 km from Tughlaqabad Fort
                and 8.5 km from Qutub Minar. Featuring a restaurant, this 4-star
                hotel has air-conditioned rooms with a private bathroom. There
                is free private parking and the property provides paid airport
                shuttle service. At the hotel, each room is equipped with a desk
                and a flat-screen TV. At SCOOVEY The BMK Hotel & Banquets every
                room is equipped with bed linen and towels. Guests at the
                accommodation can enjoy a à la carte breakfast. Staff at SCOOVEY
                The BMK Hotel & Banquets are available to give guidance at the
                24-hour front desk. Humayun's Tomb is 8.9 km from the hotel,
                while Lodhi Gardens is 9.7 km away. The nearest airport is Delhi
                International Airport, 20.9 km from SCOOVEY The BMK Hotel &
                Banquets.
              </p>
            </div>
            <div className="hotelPriceContainer">
              <h1 className="hotelPriceTitle">Perfect for 2-day stay</h1>
              <span className="hotelPriceText">
                Located in the heart of Delhi
              </span>
              <h2 className="hotelPrice">
                <b>₹3000</b> (3 nights)
              </h2>
              <button className="hotelPriceButton">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Hotel;
