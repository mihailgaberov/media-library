/**
 * Created by Mihail on 1/7/2017.
 */
import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function (state = initialState.videos, action) {
  switch (action.type) {
    case types.FLICKR_VIDEOS_SUCCESS:
      return [...state, action.videos]
    case types.SEARCH_VIDEOS_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}