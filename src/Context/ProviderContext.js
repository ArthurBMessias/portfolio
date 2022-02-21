import React from "react";
import Context from "./Context";
import ab1 from '../Images/ab1.JPG'
import ab2 from '../Images/ab2.JPG'
import ab3 from '../Images/ab3.JPG'
import ab4 from '../Images/ab4.JPG'



function ProviderContext({children}) {

    const carouselImg = [ab1, ab2, ab3, ab4]; 

    const MyContext = {
        carouselImg,
    }

    return(
        <Context.Provider value={MyContext}>
            {children}
        </Context.Provider>
    );
}

export default ProviderContext;
