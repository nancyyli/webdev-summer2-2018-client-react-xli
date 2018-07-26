import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import HeadingContainer from '../components/HeadingWidget'

const Widget = ({widget, preview, dispatch, lessonId, deleteWidget}) => {
  let selectElement
  return(
    <li className="widget-item" >
      <div hidden={preview}>
        <h3 className="widget-id-text"> Widget Name: {widget.name} Type: {widget.widgetType} </h3>

      <select className="form-control col-2 select-widget" value={widget.widgetType} onChange={e =>
          dispatch({
            type: 'SELECT_WIDGET_TYPE',
            id: widget.id,
            widgetType: selectElement.value
          })} ref={node => selectElement = node}>
        <option>Heading</option>
      </select>

      <button className="btn btn-danger delete-widget-btn" onClick={() => deleteWidget(widget.id, lessonId)}>
          <i className="fa fa-trash delete-module"></i>
        </button>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
      </div>
    </li>
  )
}

const dispatchToPropsMapper = dispatch => ({
    deleteWidget: (widgetId, lessonId) =>
        actions.deleteWidget(dispatch, widgetId, lessonId)  
  })
  
const stateToPropsMapper = state => ({
    lessonId: state.lessonId,
    preview: state.preview
})

const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget)

export default WidgetContainer