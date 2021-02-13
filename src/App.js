import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/header';
import AboutComponent from './components/about';
import ProjectComponent from './components/projects';
import SkillsComponent from './components/skills';
import FooterComponent from './components/footer';

const App = props => {
    return (
        <div>
            <HeaderComponent />
            {props.children}
            <AboutComponent />   
            <SkillsComponent />
            <ProjectComponent />
            <FooterComponent />
        </div>
    );
}
export default App;