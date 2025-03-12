import React, { useEffect } from 'react'
import { useState } from 'react';
const Footer = ({props}) => {
    const [val,setVal] = useState(0);
    useEffect(()=>{
        const sum = props.reduce((a,b)=> {
            return a + parseInt(b.excercise);
        },0);
        setVal(sum);
    },[props])
        return (
            <p>{val}</p>
        )
}

export default Footer