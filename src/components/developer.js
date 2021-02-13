import React from 'react';
import Portimage from '../images/portfimage.jpg';

const DeveloperComponent = prop => {
    const scrollEffectProjects = () => {
        var myRef = document.getElementById("projectContainer");
        myRef.scrollIntoView();
    };
    const scrollEffectContact = () => {
        var myRef = document.getElementById("contactContainer");
        myRef.scrollIntoView();
      };
    return (
        <div className="[ developerDiv ]" id="developerContainer">
            <div className="[ developerDiv__heading col-md-12 animated zoomIn ]">FAISAL HAMEED</div>
            <div className="[ col-md-12 ]">
                <div className="[ developerDiv__heading__horizLine col-md-4 col-md-offset-4 divider animated fadeInLeft ]"></div>    
            </div>
            <div className="[ developerDiv__developer col-md-12 animated fadeInLeft delay-1s ]">Front-End Developer</div>
            <div className="[ developerDiv__Buttons col-md-6 col-md-offset-3 ]">
                    <div className="col-md-12">
                        <div className="col-md-4"><h3 className="[ developerDiv__Buttons__port animated fadeInLeft pr-2 fa fa-briefcase ]" onClick={scrollEffectProjects}>Portfolio</h3></div>
                        <div className="col-md-4"><img className="[ developerDiv__Buttons__portImg animated zoomIn delay-2s ]" alt="portimg" src={Portimage}></img></div>
                        <div className="col-md-4"><h3 className="[ developerDiv__Buttons__cont animated fadeInRight ]" onClick={scrollEffectContact}>Contact</h3></div>
                    </div>          
            </div>
           
        </div>
    )
}
export default DeveloperComponent;