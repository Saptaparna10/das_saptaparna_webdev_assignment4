import React from 'react'

// const ParagraphWidget = () =>
//     <h2>List Widget</h2>

const ParagraphWidget = ({widget, preview, widgetTextChanged, widgetNameChanged, nonUniqueName, nonUniqueWidgetId}) => {
    let inputElem;
    let inputNameElem;
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
                        <label htmlFor="paragraphText" className="col-sm-2 col-form-label "><h5>Paragraph Text</h5>
                        </label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="paragraphText"
                                      onChange={() => widgetTextChanged(widget.id, inputElem.value)}
                                      defaultValue={widget.text}
                                      ref={node => inputElem = node} placeholder="Paragraph Text"></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="widgetName" className="col-sm-2 col-form-label"><h5>Widget Name</h5></label>
                        <div className="col-sm-10">
                            <input className="form-control" id="widgetName" placeholder="Widget Name"
                                   onChange={() => widgetNameChanged(widget.id, inputNameElem.value)}
                                   defaultValue={name}
                                   ref={node => inputNameElem = node}/>
                            {nonUniqueName && nonUniqueWidgetId === widget.id &&
                            <div className="alert alert-danger mt-2" role="alert">
                                The widget name is not unique!
                            </div>}
                        </div>
                    </div>
                </form>
                <h3>Preview</h3>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {widget.text}
                </div>
            </div>
        </div>
    )
}

export default ParagraphWidget

