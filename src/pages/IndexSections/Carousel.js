/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/theme/Female.jpg"),
    altText: "",
    caption: "CEO, Adaptiv Networks   09:15 A.M - 09:30 A.M ",
    header: "Kate Jordan"

  },

  {
    src: require("assets/img/theme/Male.png"),
    altText: "",
    caption: "Cybersecurity  09:30 A.M - 09:45 A.M",
    header: "Peter Heag"
  },
  {
    src: require("assets/img/theme/Female.jpg"),
    altText: "",
    caption: "Software Developer  09:45 A.M - 10:00 A.M",
    header: "Lilly Ravi"
  },
  {
    src: require("assets/img/theme/Male.png"),
    altText: "",
    caption: "IBM Cloud  10:15 A.M - 10:30 A.M",
    header: "Kevin Lim"
  },


];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light mt-4">
                 THE DIGITAL TRANSFORMATION MARKETPLACE
                </h1>
                <p className="lead text-white mt-4">
                 Large enterprise, mid-market and SMBs, MSPs, 
                 service providers and resellers gather at ITEXPO 
                 an in-depth look at the communications and technology solutions and trends that are shaping the future. 
                 This is your one-stop event for upgrading your communications 
                 and technology tools, meeting your colleagues, and getting the 
                 first look at the industry's latest innovations.
                </p>
                {/* <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button> */}
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
                <div class="panelist text-white mt-4">
                <h3>Speakers and Schedules </h3>
            </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Carousel;
