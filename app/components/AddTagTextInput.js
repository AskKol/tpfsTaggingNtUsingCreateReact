import React from 'react';

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
export default AddTagTextInput;