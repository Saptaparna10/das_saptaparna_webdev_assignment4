import React from 'react'

// const HeadingWidget = ({widget, updateWidget}) =>
//     <div>
//         <h2>Heading Widget</h2>
//         <select
//             onChange={event => {
//                 widget.size = parseInt(event.target.value)
//                 updateWidget(widget)
//             }}
//             className="form-control">
//             <option value="1">Heading 1</option>
//             <option value="2">Heading 2</option>
//             <option value="3">Heading 3</option>
//             <option value="4">Heading 4</option>
//             <option value="5">Heading 5</option>
//         </select>
//         <input
//             value={widget.text}
//             onChange={event => {
//                 widget.text = event.target.value
//                 updateWidget(widget)
//             }}
//             className="form-control"/>
//         <h3>Preview</h3>
//         {
//             widget.size === 1 && <h1>{widget.text}</h1> ||
//             widget.size === 2 && <h2>{widget.text}</h2> ||
//             widget.size === 3 && <h3>{widget.text}</h3> ||
//             widget.size === 4 && <h4>{widget.text}</h4> ||
//             widget.size === 5 && <h5>{widget.text}</h5>
//         }
//     </div>


const HeadingWidget = ({widget, preview, widgetTextChanged, headingSizeChanged, widgetNameChanged, nonUniqueName, nonUniqueWidgetId}) => {
    let selectElem;
    let inputElemHead;
    let inputNameElemHead;
    let name;
    if (widget.name != null)
        name = widget.name;
    else
        name = '';
    return (
        <div>
            <div className="mt-3" hidden={preview}>
                <form className="">
                    <div className="form-group row">
                        <label htmlFor="headingText" className="col-sm-2 col-form-label "><h5>Heading Text</h5></label>
                        <div className="col-sm-10">
                            <input className="form-control" id="headingText"
                                   onChange={() => widgetTextChanged(widget.id, inputElemHead.value)}
                                   defaultValue={widget.text}
                                   ref={node => inputElemHead = node} placeholder="Heading Text"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="headingSize" className="col-sm-2 col-form-label"><h5>Heading Size</h5></label>
                        <div className="col-sm-10">
                            <select className="form-control" id="headingSize"
                                    onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                                    defaultValue={widget.size}
                                    ref={node => selectElem = node}>
                                <option value="1">Heading 1</option>
                                <option value="2">Heading 2</option>
                                <option value="3">Heading 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="widgetName" className="col-sm-2 col-form-label"><h5>Widget Name</h5></label>
                        <div className="col-sm-10">
                            <input className="form-control" id="widgetName"
                                   onChange={() => widgetNameChanged(widget.id, inputNameElemHead.value)}
                                   defaultValue={name}
                                   ref={node => inputNameElemHead = node} placeholder="Widget Name"/>
                            {nonUniqueName && nonUniqueWidgetId === widget.id &&
                            <div className="alert alert-danger mt-2" role="alert">
                                The widget name is not unique!
                            </div>}
                        </div>
                    </div>
                    {/*{widget.name}*/}

                </form>
                <h3>Preview</h3>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {widget.size == 1 && <h1>{widget.text}</h1>}
                    {widget.size == 2 && <h2>{widget.text}</h2>}
                    {widget.size == 3 && <h3>{widget.text}</h3>}
                </div>
            </div>
        </div>
    )
}

export default HeadingWidget
