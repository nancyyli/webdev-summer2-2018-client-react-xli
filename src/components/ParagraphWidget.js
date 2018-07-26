import React from  'react'
import {connect} from 'react-redux'
import * as actions from '../actions'


const Paragraph = ({widget, preview, paragraphTextChanged, widgetNameChanged}) => {
    let inputElem
    let nameElem
    return(
      <div>
        <div className="widget-container" hidden={preview}>
          <div className="paragraph-widget-input-container form-group">
          <label htmlFor="paragraph-widget-input">Paragraph Text</label>
            <input className="form-control" id="paragraph-widget-input" onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                   value={widget.text}
                   ref={node => inputElem = node} placeholder="Enter Paragraph Text"/>
          </div>
          <div className="widget-name-container form-group">
            <label htmlFor="paragraph-widget-name"> Widget Name </label>
              <input className="form-control" id="paragraph-widget-name" onChange={() => widgetNameChanged(widget.id, nameElem.value)} value={widget.name} ref={node => nameElem = node} placeholder="Enter Widget Name"/>
          </div>
            <h3>Preview</h3>
  
        </div>
        <div className="preview">
            {widget.text}
        </div>
      </div>
    )
  }
  const dispatchToPropsMapper = dispatch => ({
    paragraphTextChanged: (widgetId, newText) =>
      actions.textChanged(dispatch, widgetId, newText),
    widgetNameChanged: (widgetId, newName) =>
      actions.widgetNameChanged(dispatch, widgetId, newName)
  
  })
  
  const stateToPropsMapper = state => ({
      lessonId: state.lessonId,
      preview: state.preview
  })
  const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)

  export default ParagraphContainer