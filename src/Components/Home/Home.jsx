import React, { useContext } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../Asserts/pocket.png";
import Vector1 from "../../Asserts/img1.png";
import Girl from "../../Asserts/girl.png";
import Txt1 from "../../Asserts/text1.png";
import Txt2 from "../../Asserts/text2.png";
import Txt3 from "../../Asserts/text3.png";
import Txt4 from "../../Asserts/text4.png";
import Dot from "../../Asserts/dot.png";
import Foot1 from "../../Asserts/foot1.png";
import Mobile1 from "../../Asserts/mob.png";
import Mobile2 from "../../Asserts/mob2.png";
import Shadow from "../../Asserts/shadow.png";

const Home = () => {
  const redirect= useNavigate();
  return (
    <>
      <section>
        <div className="header">
          <div className="pocket">
            <img src={Logo} alt="" />
          </div>
          <div className="option">
            <h5>FEATURE</h5>
            <h5>PRICING</h5>
            <h5>BUSINESS</h5>
            <h5>SMART CARD</h5>
            <button className="btn" onClick={()=>{
              redirect("/form")
            }} type="submit">
              CREATE A CARD
            </button>
          </div>
        </div>

        <div className="background">
          <img src={Vector1} alt="" />
          <div className="girl">
            <img src={Girl} alt="" />
          </div>
        </div>
        <div>
          <div className="last">
            <img src={Txt1} alt="" />
          </div>
          <div className="last1">
            <img src={Txt2} alt="" />
          </div>
          <div className="last2">
            <img src={Txt4} alt="" />
          </div>
          <div className="last3">
            <img src={Txt3} alt="" />
          </div>
          <button className="button2 btn" onClick={()=>{
              redirect("/form")
            }} type="submit">
            CREATE A CARD
          </button>
        </div>

        <div className="footer">
          <img src={Dot} alt="" />
        </div>
      </section>
      <section className="section">
        <div className="next">
          <img src={Foot1} alt="" />
        </div>
        <div className="text3">
          <p>Create your</p>
          <h1>DIGITAL BUSINESS CARD</h1>
        </div>
        <div className="p">
          <p>
            Just enter the information <br />
            you want to show on tha card. <br />
            Share anywhere,anytime on any platform <br />
          </p>
        </div>

        <div className="next1">
          <img src={Mobile2} alt="" />
        </div>
        <div className="next2">
          <img src={Mobile1} alt="" />
        </div>
        <div className="next3">
          <img src={Shadow} alt="" />
        </div>
        <div className="button2 btn">
          <button>Contact us</button>
        </div>
      </section>
    </>
  );
};

export default Home;
