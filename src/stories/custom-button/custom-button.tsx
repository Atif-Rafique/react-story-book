import React from 'react';

// STYLES
import './custom-button.css';

const CustomButton = (props: any) => {
    const { primary, type, text, handleClick } = props;



    return (
        <button type={type} className='new-contact-btn' onClick={handleClick}>
            {text}
        </button>
    )
}

export default CustomButton