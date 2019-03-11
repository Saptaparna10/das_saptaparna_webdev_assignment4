import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import {DELETE_WIDGET, MOVE_DOWN} from "../constants";
import * as actions from '../actions'


const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    previewMode: state.preview,
    disableUp: false,
    disableDown: false,
    nonUniqueName: state.nonUniqueName,
    nonUniqueWidgetId: state.nonUniqueWidgetId
})

const dispatchToPropertyMapper = (dispatch, props) => ({

    addWidget: () =>
        dispatch({
            type: 'ADD_WIDGET'
        }),

    deleteWidget: widget => {
        // props.deleteWidget(widget);
        dispatch({
            type: DELETE_WIDGET,
            id: widget.id
        })
    },

    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

    findWidgets: () =>
        dispatch({
            type: 'FIND_WIDGETS',
            widgets: props.widgets
        }),

    selectWidgetType: (widget,selectElement) =>
        dispatch({
            type: 'SELECT_WIDGET_TYPE',
            id: widget.id,
            widgetType: selectElement
        }),

    moveUp: (widget) =>
        dispatch({
            type: 'MOVE_DOWN',
            id: widget.id,
            orderOfWidget: widget.orderOfWidget
        }),

    moveDown: (widget) =>
        dispatch({
            type: 'MOVE_UP',
            id: widget.id,
            orderOfWidget: widget.orderOfWidget
        }),

    widgetTextChanged: (widgetId, newText) =>
        actions.widgetTextChanged(dispatch, widgetId, newText),

    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),

    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName),
    // Image
    imageURLChanged: (widgetId, newUrl) =>
        actions.imageURLChanged(dispatch, widgetId, newUrl),

    // Link
    linkURLChanged: (widgetId, newLinkUrl) =>
        actions.linkURLChanged(dispatch, widgetId, newLinkUrl),

    // List
    listItemsChanged: (widgetId, newListItems) =>
        actions.listItemsChanged(dispatch, widgetId, newListItems),

    listTypeChanged: (widgetId, newListType) =>
        actions.listTypeChanged(dispatch, widgetId, newListType),

    preview: () => actions.preview(dispatch)

})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)

export default WidgetListContainer