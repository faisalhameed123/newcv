import React from "react";
import WebDesign from "../images/webdesign.jpg";
import Responsive from "../images/responsive.png";
import Webap from "../images/webapp.jpg";
const AboutComponent = (prop) => {
  return (
    <div className="[ aboutCont col-md-12 ]" id="aboutContainer">
      <div className=" [ aboutCont__aboutBox col-md-12 ] ">
        <div className="col-md-4">
          <div className="col-md-12">
            <img
              className="[ aboutCont__aboutBox__webimg ]"
              alt="webimg"
              src={WebDesign}
            ></img>
          </div>
          <div className="col-md-12">
            <h3>UX/UI Design</h3>
            <p>
              If you are looking for a stunning website, or have a current
              website that needs a rejuvenation, I can bring all of those dull
              pages back to life and make it look professional.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12">
            <img
              className="[ aboutCont__aboutBox__resimg ]"
              alt="resimg"
              src={Responsive}
            ></img>
          </div>
          <div className="col-md-12">
            <h3>Front-end</h3>
            <p>
              Need to get your design implemented? im here to help you with
              quality coding skills. Hire me to turn your design to reality.
              I can work with all the latest languages and framworks.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-12">
            <img
              className="[ aboutCont__aboutBox__appimg ]"
              alt="appimg"
              src={Webap}
            ></img>
          </div>
          <div className="col-md-12">
            <h3>Web Application</h3>
            <p>
              What successful websites do: Attracts right visitors. 
              Guides them to main services or products you offer. 
              Collect contact details for future relations.
              I'm here to do it for your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutComponent;
