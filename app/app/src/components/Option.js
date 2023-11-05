import React from 'react'

const Option = ({ r, g, b }) => {
    const colorGenerator = () => `rgb(${r}, ${g}, ${b})`;
    return (
        <div className='option' style={{backgroundColor: colorGenerator()}}></div>
    )
}

export default Option;