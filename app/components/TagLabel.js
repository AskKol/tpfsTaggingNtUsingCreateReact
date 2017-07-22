import React from 'react';
import TagImage from './TagImage';
import TagLabelButton from './TagLabelButton';
import PropTypes from 'prop-types';

function TagLabel(props)
{
    var anImage = null;
    if (props.showImage != null)
    {
        anImage = <TagImage imageSource={props.imageSource} />
    }
    return (
        <span style={
            {
                borderWidth: props.borderWidth ? props.borderWidth : 1,
                borderStyle: props.borderStyle ? props.borderStyle : "none",
                borderColor: props.borderColor ? props.borderColor : "transparent",
                display: "inline-block",
                borderRadius: props.borderRadius ? props.borderRadius : 15,
                backgroundColor: props.backgroundColor ? props.backgroundColor : "transparent",
                position: "relative",
                verticalAlign:"middle",
                marginLeft: props.marginLeft ? props.marginLeft : 5,
                marginRight: props.marginRight ? props.marginRight : 10,
                marginBottom:props.marginBottom?props.marginBottom:10,
                padding: 5,
                height: props.height ? props.height : 18
            }
        }>
            {anImage}
            <label style={
                {
                    color: props.borderColor,

                    borderColor: props.borderColor,
                    paddingLeft: props.paddingLeft ? props.paddingLeft : 5,
                    paddingRight: props.paddingRight ? props.paddingRight : 5,
                    position: "relative",
                    top: -5
                }
            }>{props.value}</label>

            <TagLabelButton color={props.borderColor} />
        </span>
    );
}
TagLabel.propTypes={
    imageSource: PropTypes.string,
    borderColor: PropTypes.string,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    value:PropTypes.string.isRequired
}
export default TagLabel;