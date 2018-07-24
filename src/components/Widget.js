import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetNameChanged}) => {
  let selectElem
  let inputElem
  let nameElem
  return(
    <div>
      <div className="heading-widget-container" hidden={preview}>
        {/* <h2> Heading {widget.size}</h2> */}
        <div className="heading-widget-input-container form-group">
        <label htmlFor="heading-widget-input">Heading Text</label>
          <input className="form-control" id="heading-widget-input" onChange={() => headingTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node} placeholder="Enter Heading Text"/>
        </div>
        <div className="heading-widget-size-container form-group">
        <label htmlFor="heading-widget-size">Heading Size</label>
          <select className="form-control" id="heading-widget-size" onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                  value={widget.size}
                  ref={node => selectElem = node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>
        </div>
        <div className="heading-widget-name-container form-group">
          <label htmlFor="heading-widget-name"> Widget Name </label>
            <input className="form-control" id="heading-widget-name" onChange={() => widgetNameChanged(widget.id, nameElem.value)} value={widget.name} ref={node => nameElem = node} placeholder="Enter Widget Name"/>
        </div>
          <h3>Preview</h3>

      </div>
      <div className="preview-heading">
        {widget.size == 1 && <h1>{widget.text}</h1>}
        {widget.size == 2 && <h2>{widget.text}</h2>}
        {widget.size == 3 && <h3>{widget.text}</h3>}
      </div>
    </div>
  )
}
const dispatchToPropsMapper = dispatch => ({
  headingTextChanged: (widgetId, newText) =>
    actions.headingTextChanged(dispatch, widgetId, newText),
  headingSizeChanged: (widgetId, newSize) =>
    actions.headingSizeChanged(dispatch, widgetId, newSize),
  widgetNameChanged: (widgetId, newName) =>
    actions.widgetNameChanged(dispatch, widgetId, newName)
})

const stateToPropsMapper = state => ({
  preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

const Widget = ({widget, preview, dispatch}) => {
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
           //not convinced this works
        <option>Heading</option>
      </select>

      <button className="btn btn-danger delete-widget-btn" onClick={e => (
        dispatch({type: DELETE_WIDGET, id: widget.id})
      )}>
          <i className="fa fa-trash delete-module"></i>
        </button>
      </div>
      <div>
        {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
      </div>
    </li>
  )
}

const WidgetContainer = connect(state => ({
  preview: state.preview
}))(Widget)

export default WidgetContainer