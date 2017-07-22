import React from 'react';

function TagImage(props)
{
    return (
        <img src={props.imageSource} style={{
            paddingRight: props.paddingRight ? props.paddingRight : 5,
            paddingLeft: props.paddingLeft ? props.paddingLeft : 3,
            position: "relative",
            left: 0,
            top: 0,
            height: props.height ? props.height : 18
        }} />
    );
}
export default TagImage