import React from 'react'
import './card.css'
import video from "../../Assets/video.mp4";


const Card = () => {
  return (
    <section className="card">
      <div className="secContainer container">
        <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>What our Wonderful clients say about us!</h2>
              <p>
               Beautiful testimonials recorded by our most faithful clients, that we are so thankful for!{" "}
              </p>
            </div>

            <div data-aos="fade-left" className="cardVideo">
              <video src={video} autoPlay muted loop type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card