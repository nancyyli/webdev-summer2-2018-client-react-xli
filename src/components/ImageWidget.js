import React from  'react'
import {connect} from 'react-redux'
import * as actions from '../actions'


const Image = ({widget, preview, srcTextChanged, widgetNameChanged}) => {
    let nameElem
    let srcElem
    return(
      <div>
        <div className="widget-container" hidden={preview}>
          
          <div className="image-src-container form-group">
          <label htmlFor="image-src-input"> Image URL </label>
            <input className="form-control" id="image-src-input" onChange={() => srcTextChanged(widget.id, srcElem.value)} value={widget.src || ''}
                    ref={node => srcElem = node} placeholder="Enter URL"/>
          </div>

          <div className="widget-name-container form-group">
            <label htmlFor="image-widget-name"> Widget Name </label>
              <input className="form-control" id="image-widget-name" onChange={() => widgetNameChanged(widget.id, nameElem.value)} value={widget.name} ref={node => nameElem = node} placeholder="Enter Widget Name"/>
          </div>
            <h3>Preview</h3>
  
        </div>
        <div className="preview">
            <img src={widget.src || 'https://picsum.photos/200/300'} alt="pic" />
        </div>
      </div>
    )
  }
  const dispatchToPropsMapper = dispatch => ({
    srcTextChanged: (widgetId, newSrc) =>
      actions.srcTextChanged(dispatch, widgetId, newSrc),
    widgetNameChanged: (widgetId, newName) =>
      actions.widgetNameChanged(dispatch, widgetId, newName)
  })
  
  const stateToPropsMapper = state => ({
      lessonId: state.lessonId,
      preview: state.preview
  })
  const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)

  export default ImageContainer