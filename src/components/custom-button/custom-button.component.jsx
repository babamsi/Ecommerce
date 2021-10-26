import React from "react";
import './custom-button.style.scss'

const CustomButton = ({children, isitGoogle, ...otherProps}) => (
    (
        <button className={`${isitGoogle ? 'googlesign': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
)

export default CustomButton;