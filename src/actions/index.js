import * as constants from "../constants/index"
import WidgetService from "../services/WidgetServiceClient"

let widgetService = WidgetService.instance;
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

export const srcTextChanged = (dispatch, widgetId, newSrc) => {
    dispatch({
        type: constants.SRC_TEXT_CHANGED,
        id: widgetId,
        src: newSrc})
}

export const listItemsChanged = (dispatch, widgetId, newListItems) => (
    dispatch({
      type: constants.LIST_ITEMS_CHANGED,
      id: widgetId,
      listItem: newListItems})
)

export const listTypeChanged = (dispatch, widgetId, newListType) => (
    dispatch({
      type: constants.LIST_TYPE_CHANGED,
      id: widgetId,
      listType: newListType})
)

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
    widgetService.findAllWidgets(lessonId)
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}

export const deleteWidget = (dispatch, widgetId, lessonId) => {
    widgetService.deleteWidget(widgetId);
    dispatch({
        type: constants.DELETE_WIDGET,
        widgetId: widgetId
    })
}

export const sortOrderChanged = (dispatch, widgetId, sortOrder, direction) => {
    dispatch({
        type: constants.SORT_ORDER_CHANGED,
        widgetId: widgetId,
        sortOrder: sortOrder,
        direction: direction
    })
}

export const addWidget = dispatch => (
  dispatch({type: constants.ADD_WIDGET})
)
export const save = (dispatch, lessonId) => (
  dispatch({
      type: constants.SAVE,
      lessonId: lessonId})
)
export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
)