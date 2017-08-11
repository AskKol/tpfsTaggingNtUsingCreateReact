import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';


class TagTextArea extends React.Component
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
            showdropDownMenu: "none",
            dropDownToShow: []
        }

    }

    getTex4ATag(value) {
        console.log("getTex4ATag:"+event);
    }
    render()
    {
        return (
            <div style={
                {
                    position: "relative",
                    marginLeft: this.props.marginLeft ? this.props.marginLeft : 5,
                    marginBottom: this.props.marginBottom ? this.props.marginBottom : 10
                }
            }>
                < textarea rows={this.props.rows ? this.props.rows : 4} cols={this.props.cols ? this.props.cols : 50} id="txtAutoComplete" name="txtAutoComplete">
                </textarea>
                <DropDownMenu displayType={this.state.showDropDownMenu} dropDownMenuList={this.state.dropDownToShow} getATagText={(e)=>this.getTex4ATag(e)} />
            </div>
        );
    }
}
TagTextArea.propTypes = {
    marginLeft: PropTypes.number,
    marginBottom: PropTypes.number,
    rows: PropTypes.number,
    cols: PropTypes.number
}
export default TagTextArea;