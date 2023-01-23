import React, { useState } from "react";
import "./counter.css";
import {FaCrown} from "react-icons/fa";
import {BiHappyBeaming} from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BsFileCode } from "react-icons/bs";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const counter = () => {
  const [counteron, setCounterOn] = useState(false);
  return (
    <section className="experience" id="experience">
      {/* <div className="circle">
        <div className="work-backCircle work-blueCircle"></div>
      </div> */}

      {/* <div className="work-backCircle2 work-linearCircle"></div>
      <div className="work-backCircle3 work-redCircle"></div> */}
      <div className="achievement" data-aos="zoom-in" data-aos-duration="1000">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="circle">
            {" "}
            {counteron && (
              <CountUp
                start={0}
                end={256}
                duration={2}
                delay={0}
                className="count"
              />
            )}
            +
          </div>{" "}
        </ScrollTrigger>
        <span>Happy</span>
        <span>customers</span>
      </div>
      <div className="achievement" data-aos="zoom-in" data-aos-duration="1100">
        <div className="circle">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counteron && (
              <CountUp
                start={0}
                end={25}
                duration={2}
                delay={0}
                className="count"
              />
            )}
            +
          </ScrollTrigger>
        </div>
        <span>Countries</span>
        <span>Worldwide</span>
      </div>
      <div className="achievement" data-aos="zoom-in" data-aos-duration="1200">
        <div className="circle">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counteron && (
              <CountUp
                start={0}
                end={100}
                duration={2}
                delay={0}
                className="count"
              />
            )}
            +
          </ScrollTrigger>
        </div>
        <span>successful</span>
        <span>projects</span>
      </div>
      <div className="achievement" data-aos="zoom-in" data-aos-duration="1300">
        <div className="circle">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counteron && (
              <CountUp
                start={0}
                end={8}
                duration={2}
                delay={0}
                className="count"
              />
            )}
            +
          </ScrollTrigger>
        </div>
        <span >years</span>
        <span>experience</span>
      </div>
    </section>
  );
}
export default counter;
