import React from 'react';
import AddTagTextInput from './AddTagTextInput';
import AddTagTextBoxButton from './AddTagTextBoxButton';
import PropTypes from 'prop-types';


function AddTagTextBox(props)
{
    //You can use  this was to set properties
    var aBorderWidth = props.borderWidth;
    var aBorderStyle = props.borderStyle;
    var aBorderColor = props.borderColor;
    var aBorderRadius = props.borderRadius ? props.borderRadius : 5;
    var aBackgroundColor = props.backgroundColor ? props.backgroundColor : "white";
    var createButton = null;

    if (props.showButton != null && props.showButton === true)
    {
        createButton = <AddTagTextBoxButton />
    }
    return (
        <span
            style={
                {
                    borderWidth: aBorderWidth,
                    borderStyle: aBorderStyle,
                    borderColor: aBorderColor,
                    display: "inline-block",
                    borderRadius: aBorderRadius,
                    backgroundColor: aBackgroundColor,
                    position: "relative",
                    marginBottom: props.marginBottom ? props.marginBottom : 10,
                    width: props.width ? props.width : 230,
                    verticalAlign: "middle"
                }
            }>
            {<AddTagTextInput outlineColor={"tomato"} />}
            {createButton}
        </span>
    );
}
AddTagTextBox.propTypes = {
    borderWidth: PropTypes.number.isRequired,
    borderStyle: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number,
    backgroundColor:PropTypes.string
}
export default AddTagTextBox;