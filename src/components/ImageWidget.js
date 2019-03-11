import React from 'react'

// const ImageWidget = () =>
//     <h2>Image Widget</h2>

class ImageWidget extends React.Component {


    render() {

        var widget = this.props.widget;
        var preview = this.props.preview;
        var imageURLChanged = this.props.imageURLChanged;
        var widgetNameChanged = this.props.widgetNameChanged;
        var nonUniqueName = this.props.nonUniqueName;
        var nonUniqueWidgetId = this.props.nonUniqueWidgetId;

        let inputElem;
        let inputNameElem;
        let name;
        if (widget.name != null)
            name = widget.name;
        else
            name = '';

        let src;
        if (widget.src != null)
            src = widget.src;
        else
            src = '';

        return (
            <div>
                <div className="mt-3" hidden={preview}>
                    <form className="">
                        <div className="form-group row">
                            <label htmlFor="imageUrl" className="col-sm-2 col-form-label "><h5>Image URL</h5></label>
                            <div className="col-sm-10">
                                <input className="form-control" id="imageUrl"
                                       onChange={() => imageURLChanged(widget.id, inputElem.value)}
                                       defaultValue={src}
                                       ref={node => inputElem = node} placeholder="Image URL"/>
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
                    <div className="col-4">
                        <img src={src} className="form-control imageHeight" alt="Image"/>
                    </div>
                </div>
            </div>
        )

    }
}

export default ImageWidget