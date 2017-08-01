import React from 'react';
import PropTypes from 'prop-types';
import TagImage from './TagImage';

class DropDownMenu extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            dropDownMenuList: this.props.dropDownMenuList,
            menuDisplayType: this.props.displayType

        }
    }

    componentWillReceiveProps() {
        this.setState(() => {
            return({
                menuDisplayType: this.props.displayType
            })
        })
    }
    render()
    {
        console.log("DropDownMenu " + this.props.displayType + " " + this.state.menuDisplayType);
        return (

            <div className="dropdown-content"
                style={{ display: this.props.displayType}}>
                <ul>
                    {this.state.dropDownMenuList.map((anItem) =>
                    {
                        return (
                            <li key={anItem.id}>
                                <span><a href="#">
                                    {anItem.image && <TagImage imageSource={anItem.image} />} {anItem.name}
                                </a></span>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        );
    }
}
export default DropDownMenu;