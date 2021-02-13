import React from 'react';
import NavComponent from './navigation';
import DeveloperComponent from './developer';

const HeaderComponent = prop => {
    return (      
            <div className="[ header col-md-12 ]">
                <NavComponent />
                <DeveloperComponent />
            </div>    
    )
}
export default HeaderComponent;
