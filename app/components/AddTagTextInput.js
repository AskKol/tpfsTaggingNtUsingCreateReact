import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';

class AddTagTextInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state= {
            dropDownMenuList:
            [
                {
                    id: 1,
                    name: "Kola",
                    type: "consultant",
                    image:null
                },
                 {
                    id: 2,
                    name: "Tola",
                    type: "consultant",
                    image:null
                },
                  {
                    id: 3,
                    name: "Roy",
                    type: "consultant",
                    image:null
                }
            ],
            showDropDownMenu:"none"
        }
        this.onChangeDistributor = this.onChangeDistributor.bind(this);
    }

    onChangeDistributor(event) {
        this.props.onChange(event);
        let e = event.target.value;
        console.log("onChangeDistributor "+ e);
        if (e != null &&  e.length>0) {
            this.setState(() => {
              return   ( {
                    showDropDownMenu:
                        "block"
                })
                   
            });
        }
        if (e.length<=0) 
        {
            this.setState(() => {
               return {
                    showDropDownMenu:
                       "none"
               }
                   console.log("onChangeDistributor after "+ prevState.showDropDownMenu);
               
            });
        }
    }

    render()
    {
        return (
            <div className="dropDown">
                <input

                    id="txtAddATag"
                    type="text" name="txtAddATag"
                    placeholder={this.props.placeHolder ? this.props.placeHolder : "+ Add label"}
                    maxLength={this.props.maxLength ? this.props.maxLength : 23}
                    style={{
                        //you can set properties directly using props as well
                        width: this.props.width ? this.props.width : "100%",
                        borderRadius: this.props.borderRadius ? this.props.borderRadius : 5,
                        paddingRight: this.props.paddingRight ? this.props.paddingRight : 10,
                        outlineColor: this.props.outlineColor,
                        textIndent: this.props.textIndent ? this.props.textIndent : 5,
                        boxSizing: "border-box",
                        height: this.props.height ? this.props.height : 25
                    }}
                    onChange={this.onChangeDistributor.bind(this)} />

               <DropDownMenu displayType={this.state.showDropDownMenu} dropDownMenuList={this.state.dropDownMenuList}/>
            </div>
        );
    }
}
AddTagTextInput.propTypes = {
    placeHolder: PropTypes.string,
    maxLength: PropTypes.number,
    width: PropTypes.string,
    borderRadius: PropTypes.number,
    paddingRight: PropTypes.number,
    outlineColor: PropTypes.string.isRequired,
    textIndent: PropTypes.number,
    height: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default AddTagTextInput;