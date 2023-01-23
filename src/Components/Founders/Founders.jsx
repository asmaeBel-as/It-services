import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import "./Founders.css";
import sumit from "../../Assets/sumit.jpg";
import mohit from "../../Assets/Mohit.jpg";
import kelley from "../../Assets/kelley.jpeg";

const Founders = () => {
  return (
    <>
      {/* <section className="founders padding">
        <div className="container">
          <div
            className="content grid3 ltop"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="box">
              <img src={sumit} alt="" />
              
            </div>
            <div className="box">
              <img src={mohit} alt="" />
              
            </div>
            <div className="box">
              <img src={kelley} alt="" />
              
            </div>
          </div>
        </div>
      </section> */}
      <section className="founders">
        <div className="cardFounder">
          <div className="image__container">
            <img src={sumit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                Name LastName <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data">
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
              </div>
              <div className="actions__button">
                <button>More</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={mohit} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                Name LastName <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data">
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
              </div>
              <div className="actions__button">
                <button>More</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cardFounder">
          <div className="image__container">
            <img src={kelley} alt="" />
          </div>
          <div className="founder_content">
            <div className="details">
              <h2>
                Name LastName <br />
                <span>CEO</span>{" "}
              </h2>

              <div className="data">
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
                <h3>
                  32
                  <br />
                  <span>Projects</span>
                </h3>
              </div>
              <div className="actions__button">
                <button>More</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founders;
