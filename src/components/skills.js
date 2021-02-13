import React from 'react';
import WebDesign from '../images/work.jpg';

const skillsComponent = prop => {
    return (
        <div className="[ col-md-12 skillCont ]" id="skillsContainer" >
            <div className="col-md-6">
                <h2>Skills</h2>
                    <div className="[ col-md-12 lines ]">
                        <div className="[ progress animate-stripes ]">       
                            <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" id="htmlBar" role="progressbar"></div>
                            <button>Html</button>
                        </div>
                    <div className="progress">
                        <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" role="progressbar" id="cssBar"></div>
                            <button>Css</button>
                    </div>
                    <div className="progress">
                        <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" role="progressbar" id="javaBar"></div>
                            <button>JavaScript</button>
                    </div>
                    <div className="progress">
                        <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" role="progressbar" id="reactBar"></div>
                            <button>React Js</button>
                    </div>
                    <div className="progress">
                        <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" role="progressbar" id="xdBar"></div>
                            <button>Adobe Xd</button>
                    </div>
                    <div className="progress">
                        <div className="[ progress-bar progress-bar-striped progress-bar-animated ]" role="progressbar" id="photoBar"></div>
                            <button>Adobe Photo</button>
                        </div>              
                    </div>
            </div>
            <div className="col-md-6"><img className="[ skillCont__skillimg ]" alt="webimg" src={WebDesign}></img></div>
        </div>
    );
}
export default skillsComponent;