import React from 'react';
import HeaderComponent from './components/header';
function RootComponent() {

    //return JSX
    return ( 
        <div>
            <h1>Root Component</h1>
            <HeaderComponent></HeaderComponent>
        </div>
     );
}

export default RootComponent;