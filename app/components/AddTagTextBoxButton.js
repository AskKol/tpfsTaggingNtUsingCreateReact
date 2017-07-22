import React from 'react';
import PropTypes from 'prop-types';

function TagTextBoxButton(props)
{
    // let aBackgroundColor = this.props.textBoxButtonBackgroundColor;
    return (
        <input
            type="button"
            value={props.value ? props.value : "Create"}
            style={{
                border: props.border ? props.border : "none",
                backgroundColor: props.backgroundColor ? props.backgroundColor : "tomato",
                cursor: "pointer",
                outlineColor: props.outlineColor ? props.outlineColor : "transparent",
                position: "absolute",
                right: 0,
                top: 1,
                height: props.height ? props.height : 25,
                borderLeftStyle: props.borderLeftStyle ? props.borderLeftStyle : "solid",
                borderLeftWidth: "thin",
                borderLeftColor: "grey",
                borderTopRightRadius: props.borderTopRightRadius ? props.borderTopRightRadius : 3,
                borderBottomRightRadius: props.borderBottomRightRadius ? props.borderBottomRightRadius : 3

            }} />
    )

}
TagTextBoxButton.propTypes= {
    value: PropTypes.string,
    border: PropTypes.string,
    backgroundColor: PropTypes.string,
    outlineColor: PropTypes.string,
    height: PropTypes.number,
    borderLeftStyle: PropTypes.string,
    borderTopRightRadius: PropTypes.number,
    borderBottomRightRadius:PropTypes.number
}
export default TagTextBoxButton;