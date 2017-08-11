import React from 'react';
import PropTypes from 'prop-types';

class TagTextBoxButton extends React.Component
{
    // let aBackgroundColor = this.props.textBoxButtonBackgroundColor;
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return (
            <button
                type="button"
                value={this.props.value ? this.props.value : "Create"}
                disabled={!this.props.isDisable}
                onClick={this.props.onClick}
                style={
                    {
                        border: this.props.border ? this.props.border : "none",
                        backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "tomato",
                        cursor: "pointer",
                        outlineColor: this.props.outlineColor ? this.props.outlineColor : "transparent",
                        position: "absolute",
                        right: 0,
                        top: 1,
                        height: this.props.height ? this.props.height : 25,
                        borderLeftStyle: this.props.borderLeftStyle ? this.props.borderLeftStyle : "solid",
                        borderLeftWidth: "thin",
                        borderLeftColor: "grey",
                        borderTopRightRadius: this.props.borderTopRightRadius ? this.props.borderTopRightRadius : 3,
                        borderBottomRightRadius: this.props.borderBottomRightRadius ? this.props.borderBottomRightRadius : 3
                    }
                }>
                {this.props.value ? this.props.value : "Create"}
            </button >
        )

    }
}
TagTextBoxButton.propTypes = {
    value: PropTypes.string,
    border: PropTypes.string,
    backgroundColor: PropTypes.string,
    outlineColor: PropTypes.string,
    height: PropTypes.number,
    borderLeftStyle: PropTypes.string,
    borderTopRightRadius: PropTypes.number,
    borderBottomRightRadius: PropTypes.number,
    isDisabled: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default TagTextBoxButton;