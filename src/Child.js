//Step 1 : import react
import React from 'react';

// Step 2 make child function
const Child = ({title}) => {//props go here, and are read only

    //step 4 return a jsx object
    return(
        <div>
            Child Object
            <h1>{title}</h1>
        </div>
    );
};

//step 3 export
export default Child;
