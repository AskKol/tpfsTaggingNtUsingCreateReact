import React from 'react';
import AddTagTextBox from './AddTagTextBox';
import TagLabel from './TagLabel';
import TagTextArea from './TagTextArea';
import TagLabelHolder from './TagLabelHolder';

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            dataList:
            [
                {
                    name: "Rachel Jones",
                    type: "Consultant",
                    image: "https://github.com/askkol.png"

                },
                {
                    name: "Cdv",
                    type: "Cdv",
                    image: null

                },
                {
                    name: "Custom tag",
                    type: "CustomTag",
                    image: null

                }
            ]
        };

        this.onClick4CreateTag = this.onClick4CreateTag.bind(this);
        this.onClick4XDeleteTagFinal = this.onClick4XDeleteTagFinal.bind(this);
    }

 


    onClick4CreateTag(value) {
           this.setState((prevState) => {
            prevState.dataList.push({
                name: value,
                type: 'Custom',
                image:null
            })
        })
    }

    onClick4XDeleteTagFinal(value) {
        this.setState((prevState) => {        
            let newDatalist = prevState.dataList.filter((x) => x.name !== value);
            console.log("I am in onClick4XDeleteTagFinal " + JSON.stringify(newDatalist) );
            prevState.dataList = newDatalist;
           
        });
    }
    render()
    {
        return (
            <div style={
                {
                    width: 500
                }
            }>
                <TagTextArea />
                <TagLabelHolder dataList={this.state.dataList} onClick4XDeleteTagFinal={this.onClick4XDeleteTagFinal}/>

                <AddTagTextBox borderWidth={1} borderStyle={"solid"} borderColor={"grey"} showButton={true} onClickForCreateTag={this.onClick4CreateTag}/>
            </div>
        );
    }
}
export default App;