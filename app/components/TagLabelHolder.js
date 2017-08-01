import React from 'react';
import PropTypes from 'prop-types';
import TagLabel from './TagLabel';

class TagLabelHolder extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onClick4XDeleteTag = this.onClick4XDeleteTag.bind(this);
    }

    handleCreateClick() {
        
    }
    onClick4XDeleteTag(value)
    {
           console.log("I am in onClick4XDeleteTag " + value);
        this.props.onClick4XDeleteTagFinal(value);
    }

    render()
    {


        let listComponents = this.props.dataList.map(
            (anObject) =>
            {
                if (anObject != null && anObject.type === "Consultant")
                {
                    return (< TagLabel
                        value={anObject.name}
                        borderStyle={"solid"}
                        borderColor={"green"}
                        imageSource={anObject.image != null ? anObject.image : null}
                        showImage={anObject.image != null ? true : false}
                        key={anObject.name} onClickForXDeleteTag={this.onClick4XDeleteTag.bind(this)}/>)
                } else if (anObject != null && anObject.type === "Cdv")
                {
                    return (< TagLabel
                        value={anObject.name}
                        borderStyle={"solid"}
                        borderColor={"red"}
                        key={anObject.name}
                        onClickForXDeleteTag={this.onClick4XDeleteTag.bind(this)} />)
                } else
                {
                    return (< TagLabel
                        value={anObject.name}
                        borderStyle={"solid"}
                        borderColor={"#9e9e23"}
                        key={anObject.name}
                        onClickForXDeleteTag={this.onClick4XDeleteTag.bind(this)} />)
                }
            });
        return (
            <div>
                {listComponents} </div>
        )
    }
}


export default TagLabelHolder;