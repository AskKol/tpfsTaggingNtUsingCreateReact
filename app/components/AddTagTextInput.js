import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';

class AddTagTextInput extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            mainDropDownMenuList:
            [
                {
                    id: 1,
                    name: "Kola",
                    type: "consultant",
                    image: null
                },
                {
                    id: 2,
                    name: "Tola",
                    type: "consultant",
                    image: null
                },
                {
                    id: 3,
                    name: "Roy",
                    type: "consultant",
                    image: null
                }
            ],
            showDropDownMenu: "none",
            dropDownToShow: [],
            txtAddATagValue: ''
        }
      
        this.getTex4ATag = this.getTex4ATag.bind(this);
    }
    getTex4ATag(event)
    {
        console.log("getTex4ATag:"+event);
        this.setState({
            txtAddATagValue: event,
             showDropDownMenu:
                        "none"
        });
        this.props.onChange(event);
    }
    onChangeDistributor(event)
    {
        let e = event.target.value;
        this.setState({
            txtAddATagValue: e
        }, () => { console.log("this.state.txtAddATagValue:" + this.state.txtAddATagValue) });

        
        this.props.onChange(e);

        console.log("onChangeDistributor " + e);
        if (e != null && e.length > 0)
        {
           
            let holder = this.state.mainDropDownMenuList
                .filter(o => o.name.toLowerCase().indexOf(e.toLowerCase()) !== -1);
            console.log(holder);

            if (holder !== null && holder.length > 0)
            {
                //this.state.dropDownToShow.length = 0;
                this.setState(() =>
                {
                    this.state.dropDownToShow.length = 0;
                    return { dropDownToShow: holder.map((o) => { this.state.dropDownToShow.push(o) }) }
                    //prevState.dropDownToShow = holder;

                }

                );
                this.setState((prevState) =>
                {
                    return {
                        dropDownToShow: this.state.dropDownToShow.filter(x => x != 'undefined')
                    }
                });
                this.setState(() =>
                {
                    console.log(JSON.stringify(this.state));
                    return ({
                        showDropDownMenu:
                        "block"
                    })

                });
            } else
            {
                this.setState(() =>
                {
                    return {
                        showDropDownMenu:
                        "none",
                        dropDownToShow: []
                    }


                });

            }

            console.log(this.state.dropDownToShow);


        }
        if (e.length <= 0) 
        {
            this.setState(() =>
            {
                return {
                    showDropDownMenu:
                    "none"
                }
                console.log("onChangeDistributor after " + prevState.showDropDownMenu);

            });
        }
        console.log("this.state.txtAddATagValue:" + this.state.txtAddATagValue);
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
                    onChange={(e) => this.onChangeDistributor(e)} value={this.state.txtAddATagValue}/>

                <DropDownMenu displayType={this.state.showDropDownMenu}
                    dropDownMenuList={this.state.dropDownToShow}
                    getATagText={this.getTex4ATag.bind(this)}/>
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