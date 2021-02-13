import React from 'react';
import { Link } from 'react-router-dom';
import Holidaze from '../images/holidaze.png';
import Nasa from '../images/Nasa.png';
import Homefair from '../images/Homefair.png';
import Bessegen from '../images/Bessegen.png';
import System from '../images/designSystem.png';
import UnStudent from '../images/Unstudent.png';

const ProjectComponent = prop => {
    return (
        <div className="[ projectCont col-md-12 ]" id="projectContainer">
            <div className="[ projectCont__proHead col-md-12 ]">
                <h3>Projects in Html/Css/JavaScript/ReactJs</h3>
            </div>
            <div className=" [ proCard1 col-md-12 ] ">
                <div className="col-md-4">
                    <Link className="col-md-12" to="Holidaze"><img className="[ projectCont__proImg ]" alt="proImg" src={Holidaze}></img></Link>
                </div>
                <div className="col-md-4">
                    <Link className="col-md-12" to="Nasa"><img className= "[ projectCont__proImg ]" alt="proImg" src={Nasa}></img></Link>
                </div> 
                <div className="col-md-4">
                    <Link className="col-md-12" to="Homefair"><img className= "[ projectCont__proImg ]" alt="proImg" src={Homefair}></img></Link>
                </div>
            </div>  
            <div className=" [ proCard2 col-md-12 ] ">
                <div className="col-md-4">
                    <Link className="col-md-12" to="Bessegen"><img className= "[ projectCont__proImg ]" alt="proImg" src={Bessegen}></img></Link>
                </div>
                <div className="col-md-4">
                    <Link className="col-md-12" to="System"><img className= "[ projectCont__proImg ]" alt="proImg" src={System}></img></Link>
                </div>
                
                <div className="col-md-4">
                    <Link className="col-md-12" to="UnStudent"><img className= "[ projectCont__proImg ]" alt="proImg" src={UnStudent}></img></Link>
                </div>
            </div>
        </div>
    )
}
export default ProjectComponent;