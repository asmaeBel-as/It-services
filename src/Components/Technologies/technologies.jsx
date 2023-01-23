import meter1 from "../../Assets/meter1.svg";
import meter2 from "../../Assets/meter2.svg";
import meter3 from "../../Assets/meter3.svg";
import Carousel from "react-multi-carousel";
import flutter from '../../Assets/flutter.png'
import kotlin from '../../Assets/kotlin.jpeg'
import swift from "../../Assets/swift-og.png";
import java from "../../Assets/java.png";
import purpleblur from "../../Assets/bgcolor - Copy.png";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import colorSharp from "../../Assets/bgcolor.png";
import './technologies.css'

const technologies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <img className="background-image-top" src={purpleblur} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Techologies</h2>
              <p>
                We offer Services with various Technologies<br></br> Lorem Ipsum
                has been the industry's standard dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className=" owl-theme skill-slider"
              >
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={flutter} alt="Image" />
                  </div>

                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={kotlin} alt="Image" />
                  </div>

                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    <img src={swift} alt="Image" />
                  </div>

                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <div className="image__container">
                    {" "}
                    <img src={java} alt="Image" />
                  </div>

                  <h5>java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default technologies;
