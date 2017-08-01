import React from 'react';
import TagImage from './TagImage';
import TagLabelButton from './TagLabelButton';
import PropTypes from 'prop-types';

class TagLabel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state= {
            labelValue:props.value
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        console.log("I am in onClick of TagLabel.js " + this.state.labelValue);
        this.props.onClickForXDeleteTag(this.state.labelValue);
    }
    render()
    {
        var anImage = null;
        if (this.props.showImage != null)
        {
            anImage = <TagImage imageSource={this.props.imageSource} />
        }
        return (
            <span style={
                {
                    borderWidth: this.props.borderWidth ? this.props.borderWidth : 1,
                    borderStyle: this.props.borderStyle ? this.props.borderStyle : "none",
                    borderColor: this.props.borderColor ? this.props.borderColor : "transparent",
                    display: "inline-block",
                    borderRadius: this.props.borderRadius ? this.props.borderRadius : 15,
                    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "transparent",
                    position: "relative",
                    verticalAlign: "middle",
                    marginLeft: this.props.marginLeft ?this.props.marginLeft : 5,
                    marginRight: this.props.marginRight ? this.props.marginRight : 10,
                    marginBottom: this.props.marginBottom ? this.props.marginBottom : 10,
                    padding: 5,
                    height: this.props.height ? this.props.height : 18
                }
            }>
                {anImage}
                <label style={
                    {
                        color: this.props.borderColor,

                        borderColor: this.props.borderColor,
                        paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 5,
                        paddingRight: this.props.paddingRight ? this.props.paddingRight : 5,
                        position: "relative",
                        top: -5
                    }
                }>{this.props.value}</label>

                <TagLabelButton color={this.props.borderColor} onClick={this.onClick.bind(this)}/>
            </span>
        );
    }
}
TagLabel.propTypes = {
    imageSource: PropTypes.string,
    borderColor: PropTypes.string,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    value: PropTypes.string.isRequired,
    showImage: PropTypes.bool
}
export default TagLabel;