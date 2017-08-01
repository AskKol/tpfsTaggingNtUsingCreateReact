import React from 'react';
import ReactDOM from 'react-dom';
import AddTagTextInput from './AddTagTextInput';
import AddTagTextBoxButton from './AddTagTextBoxButton';
import PropTypes from 'prop-types';


class AddTagTextBox extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state= {
         activateCreateBtn:''   
        }

        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleEventChange(event) {
        let e = event.target.value;

        this.setState(function () {
            return { activateCreateBtn: e, tagTextBoxValue:e } 
        });
       
    }

    handleClick(event) {
        let textBoxValue = (this.state.tagTextBoxValue);
        console.log("I am in handClick "+textBoxValue);
        this.props.onClickForCreateTag(textBoxValue);

    }
    render()
    {
        //You can use  this was to set properties
        var aBorderWidth = this.props.borderWidth;
        var aBorderStyle = this.props.borderStyle;
        var aBorderColor = this.props.borderColor;
        var aBorderRadius =this.props.borderRadius ? this.props.borderRadius : 5;
        var aBackgroundColor =this.props.backgroundColor ? this.props.backgroundColor : "white";
       // var createButton = null;

        //if (props.showButton != null && props.showButton === true)
        //{
        //    createButton = 
        //}
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
                        marginBottom: this.props.marginBottom ? this.props.marginBottom : 10,
                        width: this.props.width ? this.props.width : 230,
                        verticalAlign: "middle"
                    }
                }>
                {<AddTagTextInput outlineColor={"tomato"} onChange={this.handleEventChange.bind(this)}/>}
                {this.props.showButton && <AddTagTextBoxButton isDisable={this.state.activateCreateBtn} onClick=
                    { this.handleClick.bind(this) } />}
            </span>
        );
    }
}
AddTagTextBox.propTypes = {
    borderWidth: PropTypes.number.isRequired,
    borderStyle: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.number,
    backgroundColor: PropTypes.string

}
export default AddTagTextBox;