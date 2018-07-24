import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    id: widgetId,
    text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    id: widgetId,
    size: newSize})
)

export const widgetNameChanged = (dispatch, widgetId, newName) => {
    dispatch({
        type: constants.WIDGET_NAME_CHANGED,
        id: widgetId,
        name: newName
    })
}

export const findAllWidgets = dispatch => {
    let initialState = {
        widgets: [
          {text: 'Item 1', size: 1, id: 0, widgetType: 'Heading', name: 'name 1'},
          {text: 'Item 2', size: 1, id: 1, widgetType: 'List', name: 'name 2'}
        ]
    }
    dispatch({type: constants.FIND_ALL_WIDGETS, widgets: initialState.widgets})
//   fetch('http://localhost:8080/api/widget')
//     .then(response => (response.json()))
//     .then(widgets => dispatch({
//       type: constants.FIND_ALL_WIDGETS,
//       widgets: widgets }))
}

export const addWidget = dispatch => (
  dispatch({type: constants.ADD_WIDGET})
)
export const save = dispatch => (
  dispatch({type: constants.SAVE})
)
export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
)