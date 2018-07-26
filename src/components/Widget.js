import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import HeadingContainer from '../components/HeadingWidget'
import ParagraphContainer from '../components/ParagraphWidget'

const Widget = ({widget, preview, dispatch, lessonId, deleteWidget, selectWidgetType}) => {
  let selectElement
  return(
    <li className="widget-item" >
      <div hidden={preview}>
        <h3 className="widget-id-text"> Widget Name: {widget.name} Type: {widget.widgetType} </h3>

      <select className="form-control col-2 select-widget" value={widget.widgetType} onChange={() => selectWidgetType(widget.id, selectElement.value)} ref={node => selectElement = node}>
        <option>Heading</option>
        <option>Paragraph</option>
      </select>

      <button className="btn btn-danger delete-widget-btn" onClick={() => deleteWidget(widget.id, lessonId)}>
          <i className="fa fa-trash delete-module"></i>
        </button>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
        {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
      </div>
    </li>
  )
}

const dispatchToPropsMapper = dispatch => ({
    selectWidgetType: (widgetId, newType) =>
        actions.selectWidgetType(dispatch, widgetId, newType),
    deleteWidget: (widgetId, lessonId) =>
        actions.deleteWidget(dispatch, widgetId, lessonId)  
  })
  
const stateToPropsMapper = state => ({
    lessonId: state.lessonId,
    preview: state.preview
})

const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget)

export default WidgetContainer