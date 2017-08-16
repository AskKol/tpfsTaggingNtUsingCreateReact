import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';
import { Editor, EditorState, RichUtils, CompositeDecorator, ContentState } from 'draft-js';

const SearchHighlight = (props) => (
    <span className="highlight">{props.children}</span>
);


const generateDecorator = (item2Highlight) =>
{
    const regex = new RegExp(item2Highlight, 'g');
    return new CompositeDecorator([
        {
            strategy: (contentBlock, callback) =>
            {
                if (item2Highlight !== '')
                {
                    findWithRegex(regex, contentBlock, callback);
                }
            },
            component: SearchHighlight,
        }
    ]);
}

const findWithRegex = (regex, contentBlock, callback) =>
{
    const text = contentBlock.getText();
    let matchArr, start, end;
    while ((matchArr = regex.exec(text)) !== null)
    {
        start = matchArr.index;
        end = start + matchArr[0].length;
        callback(start, end);
    }
};


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
                    image: null,
                    colour: "green"
                },
                {
                    id: 2,
                    name: "Tola",
                    type: "consultant",
                    image: null,
                    colour: "green"
                },
                {
                    id: 3,
                    name: "Roy",
                    type: "consultant",
                    image: null,
                    colour: "green"
                }
            ],
            showdropDownMenu: "none",
            dropDownToShow: [],
            TagTextArea: '',
            editorState: EditorState.createEmpty()
        }

    }

    getTex4ATag(value)
    {
        console.log("getTex4ATag =>TagTextArea:" + value);
        this.setState((prevState) =>
        {
            //console.log("prevState:" + prevState.TagTextArea);
            let replacedSpace = this.state.editorState.getCurrentContent().getPlainText().replace(/ /g, "~#*!");
            let aHolder = replacedSpace.split("~#");
            if (aHolder != null && aHolder.length > 0)
            {
                console.log("aHolder whole:" + aHolder.join(""));
                let aLength = aHolder.length - 1;
                if (aHolder[aLength].includes("*!"))
                {
                    aHolder[aLength] = " " + value;
                } else
                {
                    aHolder[aLength] = value;
                }
                aHolder = aHolder.map((h) => { return (h.replace("*!", " ")); });
                console.log("aHolder:" + aHolder);

            }
            let regHighlightList = this.state.mainDropDownMenuList.map((i) =>
            {
                return (i.name);
            });
            regHighlightList = regHighlightList.join("|");
            return (
                {
                    editorState: EditorState.set(EditorState.createWithContent(ContentState.createFromText(aHolder.join(""))), { decorator: generateDecorator(regHighlightList) }),
                    showDropDownMenu: "none"
                }
            );
        });



    }

    onChange(e)
    {

        console.log("editor:" + JSON.stringify(e));
        console.dir(e);
        this.setState({ editorState: e }, () =>
        {
            console.log("editorState:" + this.state.editorState);
        });


        if (e === null || e.getCurrentContent().getPlainText() === null || e.getCurrentContent().getPlainText() === "")
        {

            this.setState(() =>
            {
                return {
                    showDropDownMenu:
                    "none"
                }
                console.log("onChange " + prevState.showDropDownMenu);

            });
        } else
        {
            let value = e.getCurrentContent().getPlainText();

            console.log("Value:" + value);

            let strings = value.replace(/ /g, "~#*!");

            let values = strings.split("~#");

            if (values != null && values.length > 0)
            {
                console.log("values length:" + values.length.toString());
                console.log("values:" + values);
                let aLength = values.length - 1;
                console.log("values" + aLength.toString() + ": " + values[aLength]);
                let aTry = values[aLength].toLowerCase();
                aTry = aTry.replace("*!", "");
                let holder;
                if (aTry.length > 0)
                {


                    holder = this.state.mainDropDownMenuList
                        .filter(o => o.name.toLowerCase().indexOf(values[aLength].toLowerCase().replace("*!", "")) !== -1);
                } else
                {
                    holder = this.state.mainDropDownMenuList
                        .filter(o => o.name.toLowerCase().indexOf(values[aLength].toLowerCase()) !== -1);
                }

                if (holder !== null && holder.length > 0)
                {
                    console.log("holder:" + JSON.stringify(holder));
                 
                    this.setState(() =>
                    {
                        this.state.dropDownToShow.length = 0;
                        return { dropDownToShow: holder.map((o) => { this.state.dropDownToShow.push(o) }) }
                     

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
            else
            {
                this.setState(() =>
                {
                    return {
                        showDropDownMenu:
                        "none"
                    }
                    console.log("onChangeEvent after " + prevState.showDropDownMenu);

                });
            }
        }
        console.log("this.state.editorState:" + this.state.editorState.getCurrentContent().getPlainText());
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


                <Editor editorState={this.state.editorState}
                    className="editor-look" onChange={(e) => this.onChange(e)} />


                <DropDownMenu displayType={this.state.showDropDownMenu}
                    dropDownMenuList={this.state.dropDownToShow}
                    getATagText={(e) => this.getTex4ATag(e)}
                    width={"50%"} />
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