import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScrollService";
import "./about.css";
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/Vector0.png";
import company from "../../Assets/company.png";
import professional from "../../Assets/professonal.png";
import quality from "../../Assets/quality.png";
import Aos from "aos";
import "aos/dist/aos.css";

import { RiQuestionFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Upwork from "../../Assets/Upwork.png";
import Fiverr from "../../Assets/fiverr.png";
import Amazon from "../../Assets/amazon.png";
import Shopify from "../../Assets/Shopify.png";
import Facebook from "../../Assets/Facebook.png";
import Animations from '../../utilities/Animation'
import ScrollService from "../../utilities/ScrollService";
const about = (props) => {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); 

  const transition = { duration: 2, type: "spring" };
  return (
    <section className="about-us-container fade-in " id={props.id || ""}>
      <div className="program__heada">
        <span data-aos="fade-up" data-aos-duration="2000">
          {<RiQuestionFill />}
        </span>
        <h2 data-aos="fade-up" data-aos-duration="2100">
          About Us
        </h2>
      </div>

      <div className="works" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span data-aos="fade-up-left" data-aos-duration="1000">
              Hello, We Are
            </span>
            <span data-aos="fade-up-left" data-aos-duration="1000">
              Brain Star Technologies
            </span>
            <spane data-aos="fade-up-left" data-aos-duration="1100">
              Brain Star technologies deliver a wide range of software <br />
              development solutions that includes Digital marketing services,
              <br />
              affordable SEO services, Social Media Marketing, Website Design
              <br />
              and Development, Email Outreach, Content Writing, and
              <br />
              Optimization, we do it all. We assure you to get more leads. more
              <br />
              sales. Increased revenue. In short with Brain star Technologies
              <br />
              you may establish your digital presence today and explore your
              <br />
              market potential as we are one of the best web design company in
              <br />
              USA. We thrive to be the best digital marketing company in USA and
              <br />
              are a full-service digital marketing agency that helps your
              <br />
              company expand into new markets, attract more employees, and
              <br />
              achieve incredible results in your field. So, don’t think anymore
              <br />
              and call us today!
              <br />
            </spane>

            <button
              className="btn s-button"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Contact Us{" "}
            </button>

            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div
          className="w-right"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle blueCircle"
          ></div>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-backCircle yellowCircle"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default about;
