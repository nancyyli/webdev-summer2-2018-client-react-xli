import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/Widget'
import '../css/widget.css'

class WidgetList extends Component {
  constructor(props) {
    super(props)
    this.props.findAllWidgets()
  }
  render() {
              //TODO add lesson id later 
    return(
      <div className="widget-box">
        <h3 className="widgets-title">There are {this.props.widgets.length} widgets</h3>
        <div className="preview-toggle">
            <div className="preview-text">Preview</div>
            <label className="switch" > 
                <input type="checkbox" data-toggle="toggle"/>
                <span className="slider round" onClick={this.props.preview}></span>
            </label>
        </div>

        <button className="btn btn-success save-btn" hidden={this.props.previewMode} onClick={this.props.save}>
          Save
        </button>

        <ul className="widgets-list">
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
          ))}
        </ul>
        <button onClick={this.props.addWidget} className="btn btn-primary add-widget-btn">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
})
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgets: () => actions.findAllWidgets(dispatch),
  addWidget: () => actions.addWidget(dispatch),
  save: () => actions.save(dispatch),
  preview: () => actions.preview(dispatch)
})
const App = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default App