import React from 'react';
import PropTypes from 'prop-types';

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
TagImage.propTypes= {
    imageSource: PropTypes.string.isRequired,
    paddingRight: PropTypes.number,
    paddingLeft: PropTypes.number,
    height:PropTypes.number
}
export default TagImage