import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'


const List = ({widget, preview, listItemsChanged, listTypeChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let nameElem
    return(

    <div>
        <div className="widget-container" hidden={preview}>
          <div className="list-widget-input-container form-group">
            <label htmlFor="list-widget-input">List Items</label>
            <textarea ref={node => inputElem = node}
                className="form-control" id="link-widget-input"
                onChange={() => listItemsChanged(widget.id, inputElem.value)}
                value={widget.listItem || ''} placeholder="Enter one list item per line"></textarea>
          </div>

          <div className="list-widget-order-container form-group">
          <label htmlFor="list-widget-order">List Order</label>
            <select className="form-control" id="list-widget-order" onChange={() => listTypeChanged(widget.id, selectElem.value)}
                    value={widget.listType || 'Ordered'}
                    ref={node => selectElem = node}>
              <option value="Ordered">Ordered List</option>
              <option value="Unordered">Unordered List</option>
            </select>
          </div>

          <div className="widget-name-container form-group">
            <label htmlFor="list-widget-name"> Widget Name </label>
              <input className="form-control" id="list-widget-name" onChange={() => widgetNameChanged(widget.id, nameElem.value)} value={widget.name} ref={node => nameElem = node} placeholder="Enter Widget Name"/>
          </div>
            <h3>Preview</h3>
  
        </div>
        <div className="preview">
            {widget.listType === 'Unordered' &&
                <ul>
                    {widget.listItem.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                }
                {widget.listType === 'Ordered' &&
                <ol>
                    {widget.listItem.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ol>
                }
        </div>
      </div>

    )
  }

  const dispatchToPropsMapper = dispatch => ({
    listItemsChanged: (widgetId, newListItems) =>
      actions.listItemsChanged(dispatch, widgetId, newListItems),
    listTypeChanged: (widgetId, newListType) =>
      actions.listTypeChanged(dispatch, widgetId, newListType),
    widgetNameChanged: (widgetId, newName) =>
      actions.widgetNameChanged(dispatch, widgetId, newName)
  
  })
  
  const stateToPropsMapper = state => ({
      lessonId: state.lessonId,
      preview: state.preview
  })
  const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)

  export default ListContainer