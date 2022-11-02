//first custom component
import React from 'react';

function HeaderComponent() {

    let score = 8

    let spaceCraft =()=>{
        return "Let's travel to Mars"
    }

    let launch = ()=>{
        console.log("Rocket launched....")
    }

    return ( 
        <div>
            <h1>This is header component!</h1>
            <h2>Score: {score}</h2>
            <h2>Message: {spaceCraft()}</h2>
            <div>
                <button onClick={launch}>Click  Me</button>
            </div>
        </div>
     );
}

export default HeaderComponent;
