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
    return(
      <div>
        <h3>There are {this.props.widgets.length} widgets</h3>
        <div className="preview-toggle">
            Preview
            <label className="switch" onClick={this.props.preview}> 
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
        <button className="btn btn-primary preview-btn" onClick={this.props.preview}>
          Preview
        </button>

        <button className="btn btn-success save-btn" hidden={this.props.previewMode} onClick={this.props.save}>
          Save
        </button>

        <ul>
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
          ))}
        </ul>
        <button onClick={this.props.addWidget}>Add widget</button>
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