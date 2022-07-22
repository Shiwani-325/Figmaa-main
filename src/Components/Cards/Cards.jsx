import React from "react";
import "./Cards.css";
import Logo from "../../Asserts/pocket.png";
import Img1 from "../../Asserts/img.png";
import Img2 from "../../Asserts/img2.png";
import Img3 from "../../Asserts/img3.png";
import Btn from "../../Asserts/btn.png";
import Barcode from "../../Asserts/barcode.png";
import Rect from "../../Asserts/rectbox.png";
import Plus from "../../Asserts/plus.png";
import Rect2 from "../../Asserts/recbox2.png";

const Cards = () => {
  return (
    <>
      <section>
        <div className="header">
          <div className="pocket">
            <img src={Logo} alt="" />
          </div>

          <div className="image1">
            <h1>Your Cards</h1>
            <img src={Img1} alt="" />
          </div>
          <div className="image2">
            <h1>Share Your Card</h1>
            <img src={Img2} alt="" />
            <p>Scan or Click To Preview</p>
          </div>
          <div className="image3">
            <h1>Unloack Features</h1>
            <img src={Img3} alt="" />
            <div className="btn">
              <img src={Btn} alt="" />
            </div>
            <div className="image4">
              <img src={Barcode} alt="" />
            </div>
            <div className="rect1">
              <img src={Rect} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="newBtn">
        <button>
          <img src={Plus} alt="" />
          <h4>Create A New Card</h4>
        </button>
      </div>

      <div className="rectan">
        <div className="one">
          <img src={Rect2} alt="" />
        </div>
        <div className="pic1">
          <div>
            <param className="para" value="" />
            <img src={Barcode} alt="" />
          </div>
        </div>

        <div className="two">
          <img src={Rect2} alt="" />
        </div>

        <div className="three">
          <img src={Rect2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cards;
