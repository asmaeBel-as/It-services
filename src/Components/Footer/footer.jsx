import React from 'react';
import footer from "../../Assets/wave (2).png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Google from '@iconscout/react-unicons/icons/uil-google'
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import { ImGooglePlus } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import  logo  from "../../Assets/logo.png";

import './footer.css'
import { Row,Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div class="footer-top-section">
        <Container>
          <Row>
            <Col xl={12}>
              <div class="footer-rows-container">
                <div class="footer-rows-left">
                  <div class="footer-row">
                    <div class="footer-row-inner footer-logo">
                      <img src={logo} alt="logopng" />
                    </div>
                  </div>
                </div>

                <div class="footer-rows-right">
                  <div class="footer-row">
                    <div class="footer-row-inner">
                      <ul class="footer-social-links">
                        <li>
                          <a
                            href="#"
                            title="Facebook"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <Facebook />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Twitter"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <Twitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="Google Plus"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <ImGooglePlus />
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            title="LinkedIn"
                            data-tippy-placement="bottom"
                            data-tippy-theme="light"
                          >
                            <Linkedin />
                          </a>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                    </div>
                  </div>

                  <div class="footer-row">
                    <div class="footer-row-inner">
                      <select
                        class="selectpicker language-switcher"
                        data-selected-text-format="count"
                        data-size="5"
                      >
                        <option selected>English</option>
                        <option>Français</option>
                        <option>Español</option>
                        <option>Deutsch</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="footer-middle-section">
        <Container>
          <Row>
            <Col xl={2} lg={2} md={3}>
              <div class="footer-links">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Web Design Company</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Web Development</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Company Branding</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Search Engine Marketing</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={2} md={3}>
              <div class="footer-links">
                <h3>Los Angelos Office</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>New York, NY 10001</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Phone: +91 79863 24471</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Toll free: 888.962.9932</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>info@brainstartechnologies.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={2} md={3}>
              <div class="footer-links">
                <h3>Helpful Links</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Terms of Use</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={2} md={3}>
              <div class="footer-links">
                <h3>Account</h3>
                <ul>
                  <li>
                    <a href="#">
                      <span>Log In</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>My Account</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={4} md={12}>
              <h3>
                <AiFillMail /> Sign Up For a Newsletter
              </h3>
              <p>
                Weekly breaking news, analysis and cutting edge advices on job
                searching.
              </p>
              <form action="#" method="get" class="newsletter">
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your email address"
                />
                <button type="submit">
                  <i className="right">
                    {" "}
                    <BsChevronRight />
                  </i>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div class="footer-bottom-section">
        <Container>
          <Row>
            <Col xl={12}>
              © 2023 <strong>Brain Star Technologies</strong>. All Rights
              Reserved.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer