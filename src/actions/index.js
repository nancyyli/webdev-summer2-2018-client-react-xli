import * as constants from "../constants/index"

export const textChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.TEXT_CHANGED,
    id: widgetId,
    text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    id: widgetId,
    size: newSize})
)

export const hrefTextChanged = (dispatch, widgetId, newHref) => {
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        href: newHref})
}

export const widgetNameChanged = (dispatch, widgetId, newName) => {
    dispatch({
        type: constants.WIDGET_NAME_CHANGED,
        id: widgetId,
        name: newName
    })
}

export const selectWidgetType = (dispatch, widgetId, newType) => {
    dispatch({
        type: constants.SELECT_WIDGET_TYPE,
        id: widgetId,
        widgetType: newType
      })
}
export const findAllWidgets = (dispatch, lessonId) => {
  fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}

export const deleteWidget = (dispatch, widgetId, lessonId) => {
    fetch('http://localhost:8080/api/widget/' + widgetId, {
        method: 'delete'
    });
    dispatch({
        type: constants.DELETE_WIDGET,
        widgetId: widgetId
    })
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