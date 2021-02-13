import React from "react";
import { Link } from "react-router-dom";
import face from "../icons/facebook-new.png";
import linked from "../icons/linkedin.png";
import insta from "../icons/instagram.png";
import contact from "../images/contactImg.jpg";
import get from "../images/get.png";

const FooterComponent = (props) => {
  return (
    <div className="[ footCont col-md-12 ]" id="contactContainer">
      <div className="[ row col-md-12 ]">
          <div className="col-md-4">
            <div className="[ col-md-12 footCont__contImg ]">
              <img src={contact} alt="contact"></img>
            </div>     
          </div>
        <div className="[ footCont__contInfo col-md-4 ]">  
            <h2>Contact</h2>
            <br></br>
            <p>faisalfrontend@gmail.com</p>
            <p>Tlf : 92698012</p>
            <p>Address : Fossumberget 3 a</p>
            <p> 0983 Oslo</p>
            <br></br>        
        </div>
        <div className="[ footCont__box3 col-md-4  ]">
          <img src={get} alt="get"></img>
          <div className="[ footCont__icons row col-md-12 ]">
            <div className="[ footCont__icons__fImg col-md-4 col-sm-4 ] ">
                <Link to="face">
                  <img src={face} alt="faceIcon"></img>
                </Link>
              </div>
              <div className="[ footCont__icons__iImg col-md-4 col-sm-4 ] ">
                <Link to="insta">
                  <img src={insta} alt="instaIcon"></img>
                </Link>
              </div>
              <div className="[ footCont__icons__linkImg col-md-4 col-sm-4 ]">
                <Link to="linked">
                  <img src={linked} alt="linkedIcon"></img>
                </Link>
              </div>       
            </div> 
        </div> 
      </div>
      <div className="[ footCont__CopyRight row col-md-12 ]">
          <h6>©2021.CopyRights@faisalhportfolio.netlify</h6>
      </div>
    </div>
  );
};
export default FooterComponent;
