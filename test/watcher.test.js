/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { takeLatest } from 'redux-saga/effects'
import searchMediaSaga from '../src/sagas/imagesSaga'
import watchSearchMedia from '../src/sagas/watcher'

describe('Test for Watcher', () => {

  describe('watchSearchMedia', () => {
    it('should call imagesSaga', () => {
      const gen = watchSearchMedia()
      expect(gen.next().value).toEqual(takeLatest('SEARCH_IMAGES_REQUEST', searchMediaSaga))
    })
  })
})