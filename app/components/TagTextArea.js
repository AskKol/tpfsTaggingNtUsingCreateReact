import React from 'react';
import PropTypes from 'prop-types';


function TagTextArea(props)
{

    return (
        <div style={
            {
                position: "relative",
                 marginLeft: props.marginLeft ? props.marginLeft : 5,
                marginBottom:props.marginBottom?props.marginBottom:10
            }
        }>
            < textarea rows={props.rows?props.rows:4} cols={props.cols?props.cols:50}>
            </textarea>
        </div>
    );
}
TagTextArea.propTypes= {
    marginLeft: PropTypes.number,
    marginBottom: PropTypes.number,
    rows: PropTypes.number,
    cols:PropTypes.number
}
export default TagTextArea;