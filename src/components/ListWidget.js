import React from 'react'
//
// const ListWidget = () =>
//     <h2>List Widget</h2>

const ListWidget = ({widget, preview, listItemsChanged, listTypeChanged, widgetNameChanged, nonUniqueName, nonUniqueWidgetId}) => {
    let inputElem;
    let selectElem;
    let inputNameElem;
    let name;
    if (widget.name != null)
        name = widget.name;
    else
        name = '';
    let listItems;
    if (widget.listItems != null)
        listItems = widget.listItems;
    else
        listItems = '';

    var previewList = [];
    var listOfLi = listItems.split(/\r?\n/);
    for (var x in listOfLi)  {
        previewList.push(<li key={x}>{listOfLi[x]}</li>)
    }

    let listType;
    if (widget.listType != null)
        listType = widget.listType;
    else
        listType = 1;
    return (
        <div>
            <div className="mt-3" hidden={preview}>
                <form className="">
                    <div className="form-group row">
                        <label htmlFor="listItems" className="col-sm-2 col-form-label "><h5>List Items</h5></label>
                        <div className="col-sm-10">
                            <textarea className="form-control mt-3"
                                      onChange={() => listItemsChanged(widget.id, inputElem.value)}
                                      defaultValue={listItems}
                                      ref={node => inputElem = node}
                                      placeholder="Put each item in a separate row"></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="listType" className="col-sm-2 col-form-label "><h5>List Type</h5></label>
                        <div className="col-sm-10">
                            <select className="form-control mt-3"
                                    onChange={() => listTypeChanged(widget.id, selectElem.value)}
                                    defaultValue={listType}
                                    ref={node => selectElem = node} id="listType">
                                <option value="1">Unordered list</option>
                                <option value="2">Ordered List</option>
                            </select>
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
                    {listItems != '' && listType == 1 && <ul>{previewList}</ul>}
                    {listItems != '' && listType == 2 && <ol>{previewList}</ol>}
                </div>
            </div>
        </div>

    )
}


export default ListWidget