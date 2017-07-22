import React from 'react';
import PropTypes from 'prop-types';

function AddTagTextInput(props)
{

    return (
        <input
            type="text"
            placeholder={props.placeHolder ? props.placeHolder : "+ Add label"}
            maxLength={props.maxLength ? props.maxLength : 23}
            style={{
                //you can set properties directly using props as well
                width: props.width ? props.width : "100%",
                borderRadius: props.borderRadius ? props.borderRadius : 5,
                paddingRight: props.paddingRight ? props.paddingRight : 10,
                outlineColor: props.outlineColor,
                textIndent: props.textIndent ? props.textIndent : 5,
                boxSizing: "border-box",
                height: props.height ? props.height : 25
            }} />
    );
}
AddTagTextInput.propTypes= {
    placeHolder: PropTypes.string,
    maxLength: PropTypes.number,
    width: PropTypes.string,
    borderRadius: PropTypes.number,
    paddingRight: PropTypes.number,
    outlineColor: PropTypes.string.isRequired,
    textIndent: PropTypes.number,
    height: PropTypes.number
}
export default AddTagTextInput;