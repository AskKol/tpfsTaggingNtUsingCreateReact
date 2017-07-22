import React from 'react';
import AddTagTextBox from './AddTagTextBox';
import TagLabel from './TagLabel';
import TagTextArea from './TagTextArea';

function App(props)
{
    return (
        <div style={
            {
                width: 500
            }
        }>
            <TagTextArea />
            <TagLabel value={"Rachel Jones"} borderStyle={"solid"} borderColor={"green"} imageSource={"https://github.com/askkol.png"} showImage={true} />
            <TagLabel value={"CDV"} borderStyle={"solid"} borderColor={"red"} />
            <TagLabel value={"Custom tag"} borderStyle={"solid"} borderColor={"#9e9e23"} />
            <AddTagTextBox borderWidth={1} borderStyle={"solid"} borderColor={"grey"} showButton={"true"} />
        </div>
    );
}
export default App;