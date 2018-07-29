import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import HeadingContainer from '../components/HeadingWidget'
import ParagraphContainer from '../components/ParagraphWidget'
import LinkContainer from '../components/LinkWidget'
import ImageContainer from '../components/ImageWidget'
import ListContainer from '../components/ListWidget'

const Widget = ({widget, preview, dispatch, lessonId, deleteWidget, selectWidgetType, sortOrderChanged, widgetListLength}) => {
  let selectElement
  return(
    <li className="widget-item" >
      <div hidden={preview}>
        <h3 className="widget-id-text"> Widget Name: {widget.name} Type: {widget.widgetType} </h3>


     <button type="button" className="btn btn-info sort-up-btn" disabled={widget.sortOrder == 0} onClick={() => sortOrderChanged(widget.id, widget.sortOrder - 1, "up")}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
     </button>
     <button type="button" className="btn btn-info sort-down-btn" disabled={widget.sortOrder > widgetListLength - 1} onClick={() => sortOrderChanged(widget.id, widget.sortOrder + 1, "down")}>
        <i className="fa fa-arrow-down" aria-hidden="true"></i>
     </button>
      <select className="form-control col-2 select-widget" value={widget.widgetType} onChange={() => selectWidgetType(widget.id, selectElement.value)} ref={node => selectElement = node}>
        <option>Heading</option>
        <option>Paragraph</option>
        <option>Link</option>
        <option>Image</option>
        <option>List</option>
      </select>

      <button className="btn btn-danger delete-widget-btn" onClick={() => deleteWidget(widget.id, lessonId)}>
          <i className="fa fa-trash delete-module"></i>
        </button>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
        {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
        {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
        {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
        {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
      </div>
    </li>
  )
}

const dispatchToPropsMapper = dispatch => ({
    selectWidgetType: (widgetId, newType) =>
        actions.selectWidgetType(dispatch, widgetId, newType),
    deleteWidget: (widgetId, lessonId) =>
        actions.deleteWidget(dispatch, widgetId, lessonId),
    sortOrderChanged: (widgetId, sortOrder, direction) =>
        actions.sortOrderChanged(dispatch, widgetId, sortOrder, direction)
  })
  
const stateToPropsMapper = state => ({
    lessonId: state.lessonId,
    preview: state.preview
})

const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget)

export default WidgetContainer