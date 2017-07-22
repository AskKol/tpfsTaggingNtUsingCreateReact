import React from 'react';
import PropTypes from 'prop-types';

function TagLabelButton(props)
{

    return (
        <input
            type="button"
            value="x"
            style={{
                border: "none",
                backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",
                cursor: "pointer",
                outlineColor: props.backgroundColor ? props.backgroundColor : "transparent",
                position: "relative",
                color: props.color,
                top: props.top ? props.top : -5,
                fontSize: "larger"
       

            }} />
    )
}
TagLabelButton.propTypes= {
    backgroundColor: PropTypes.string,
    color: PropTypes.string.isRequired,
    top:PropTypes.number
}
export default TagLabelButton;