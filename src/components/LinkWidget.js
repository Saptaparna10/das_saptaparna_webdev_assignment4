import React from 'react'

// const LinkWidget = () =>
//     <h2>Link Widget</h2>


const LinkWidget = ({widget, preview, linkURLChanged, widgetNameChanged, widgetTextChanged, nonUniqueName, nonUniqueWidgetId}) => {
    let inputElem;
    let inputNameElem;
    let inputUrlElem;
    let name;
    if (widget.name != null)
        name = widget.name;
    else
        name = '';
    let href;
    if (widget.href != null)
        href = widget.href;
    else
        href = '';
    return (
        <div>
            <div className="mt-3" hidden={preview}>
                <form className="">
                    <div className="form-group row">
                        <label htmlFor="linkUrl" className="col-sm-2 col-form-label "><h5>Link URL</h5></label>
                        <div className="col-sm-10">
                            <input className="form-control" id="linkUrl"
                                   onChange={() => linkURLChanged(widget.id, inputUrlElem.value)}
                                   defaultValue={href}
                                   ref={node => inputUrlElem = node} placeholder="Link URL"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="linkText" className="col-sm-2 col-form-label "><h5>Link Text</h5></label>
                        <div className="col-sm-10">
                            <input className="form-control" id="linkText"
                                   onChange={() => widgetTextChanged(widget.id, inputElem.value)}
                                   defaultValue={widget.text}
                                   ref={node => inputElem = node} placeholder="Link Text"/>
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

                    <a href={href}>{widget.text}</a>

                </div>
            </div>
        </div>
    )
}

export default LinkWidget