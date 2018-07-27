import React from  'react'
import {connect} from 'react-redux'
import * as actions from '../actions'


const Link = ({widget, preview, textChanged, hrefTextChanged, widgetNameChanged}) => {
    let inputElem
    let nameElem
    let linkElem
    return(
      <div>
        <div className="widget-container" hidden={preview}>
          <div className="link-widget-input-container form-group">
          <label htmlFor="link-widget-input">Link Text</label>
            <input className="form-control" id="link-widget-input" onChange={() => textChanged(widget.id, inputElem.value)}
                   value={widget.text}
                   ref={node => inputElem = node} placeholder="Link Text"/>
          </div>
          
          <div className="link-href-container form-group">
          <label htmlFor="link-href-input"> URL </label>
            <input className="form-control" id="link-href-input" onChange={() => hrefTextChanged(widget.id, linkElem.value)} value={widget.href || ''}
                    ref={node => linkElem = node} placeholder="Link URL"/>
          </div>

          <div className="widget-name-container form-group">
            <label htmlFor="link-widget-name"> Widget Name </label>
              <input className="form-control" id="link-widget-name" onChange={() => widgetNameChanged(widget.id, nameElem.value)} value={widget.name} ref={node => nameElem = node} placeholder="Enter Widget Name"/>
          </div>
            <h3>Preview</h3>
  
        </div>
        <div className="preview">
             <a href={widget.href} target="_blank">{widget.text}</a>
        </div>
      </div>
    )
  }
  const dispatchToPropsMapper = dispatch => ({
    hrefTextChanged: (widgetId, newHref) =>
      actions.hrefTextChanged(dispatch, widgetId, newHref),
    textChanged: (widgetId, newText) =>
      actions.textChanged(dispatch, widgetId, newText),
    widgetNameChanged: (widgetId, newName) =>
      actions.widgetNameChanged(dispatch, widgetId, newName)
  
  })
  
  const stateToPropsMapper = state => ({
      lessonId: state.lessonId,
      preview: state.preview
  })
  const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)

  export default LinkContainer