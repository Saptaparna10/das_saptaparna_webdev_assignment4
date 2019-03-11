import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
import ListWidget from './ListWidget'
import LinkWidget from './LinkWidget'
import ParagraphWidget from './ParagraphWidget'
import {DELETE_WIDGET, MOVE_DOWN, MOVE_UP} from "../constants";


const WidgetComponent = ({key, updateWidget, deleteWidget, selectWidgetType, moveUp, moveDown, widget, preview, disableUp, disableDown,
                             widgetTextChanged, headingSizeChanged, widgetNameChanged, nonUniqueName, nonUniqueWidgetId,
                             listItemsChanged, listTypeChanged, imageURLChanged, linkURLChanged}) => {

    let selectElement;
    return (

        <li className="" style={{listStyle: 'none', border: '1px dotted grey', padding: 20}}>
            <div>
                <div className="row">
                    <div className="col">

                        <h2 className="float-left d-none d-md-block ">{widget.type} Widget</h2>
                        <i className="btn btn-danger fa fa fa-times m-0 float-right " title="Update Topic Name"
                           onClick={() => deleteWidget(widget)}></i>
                        <select className="form-control w-25 h-60 float-right m-0 mr-2 container-fluid" defaultValue={widget.type}
                                onChange={() => selectWidgetType(widget, selectElement.value)}
                                ref={node => selectElement = node}>
                            <option value='HEADING'>Heading</option>
                            <option value='PARAGRAPH'>Paragraph</option>
                            <option value='LIST'>List</option>
                            <option value='IMAGE'>Image</option>
                            <option value='LINK'>Link</option>
                        </select>
                        {!disableDown &&
                        <i className="btn btn-warning fa fa fa-arrow-down float-right mr-2" title="Move Down"
                           onClick={() => moveUp(widget)}>
                        </i>}
                        {!disableUp &&

                        <i className="btn btn-warning fa fa fa-arrow-up float-right mr-2" title="Move Up"
                           onClick={() => moveDown(widget)}
                        ></i>}

                    </div>
                </div>
                <div>
                    {widget.type === 'HEADING' && <HeadingWidget
                                                            preview={preview}
                                                            widget={widget}
                                                            widgetTextChanged={widgetTextChanged}
                                                            headingSizeChanged={headingSizeChanged}
                                                            widgetNameChanged={widgetNameChanged}
                                                            nonUniqueName={nonUniqueName}
                                                            nonUniqueWidgetId={nonUniqueWidgetId}/>}

                    {widget.type === 'PARAGRAPH' && <ParagraphWidget
                                                            preview={preview}
                                                            widget={widget}
                                                            widgetTextChanged={widgetTextChanged}
                                                            widgetNameChanged={widgetNameChanged}
                                                            nonUniqueName={nonUniqueName}
                                                            nonUniqueWidgetId={nonUniqueWidgetId}
                    />}
                    {widget.type === 'LIST' && <ListWidget
                                                            preview={preview}
                                                            widget={widget}
                                                            listItemsChanged={listItemsChanged}
                                                            listTypeChanged={listTypeChanged}
                                                            widgetNameChanged={widgetNameChanged}
                                                            nonUniqueName={nonUniqueName}
                                                            nonUniqueWidgetId={nonUniqueWidgetId}/>}

                    {widget.type === 'IMAGE' && <ImageWidget
                                                            preview={preview}
                                                            widget={widget}
                                                            imageURLChanged={imageURLChanged}
                                                            widgetNameChanged={widgetNameChanged}
                                                            nonUniqueName={nonUniqueName}
                                                            nonUniqueWidgetId={nonUniqueWidgetId}/>}
                    {widget.type === 'LINK' && <LinkWidget
                                                            preview={preview}
                                                            widget={widget}
                                                            linkURLChanged={linkURLChanged}
                                                            idgetNameChanged={widgetNameChanged}
                                                            nonUniqueName={nonUniqueName}
                                                            nonUniqueWidgetId={nonUniqueWidgetId}
                                                            widgetTextChanged={widgetTextChanged}/>}
                </div>
            </div>
        </li>
    )
}

export default WidgetComponent