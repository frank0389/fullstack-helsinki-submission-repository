import React from 'react'
import Part from './Part';

// eslint-disable-next-line react/prop-types
const Content = ({parts}) => {

    return <div>
            {
                parts.map((part, index) =>{
                    console.log(part);
                    return <Part name={part.name} exercises={part.exercises}/>
                })
            }
    </div> 
       
   
};

export default Content;