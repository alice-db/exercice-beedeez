import fetch from 'cross-fetch'
import 'babel-polyfill'

// close dialog element about capsule
export const closeCapsule = () => ({
    type: 'CLOSE_CAPSULE'
})

// open dialog element about capsule
export const toggleCapsule = _id => ({
  type: 'TOGGLE_CAPSULE',
  _id
})

// match capsule on title
export const searchCapsule = text => ({
    type: 'SEARCH_CAPSULE',
    text
})

// fetch capsules succeed
export const receiveCapsules = json => ({
    type: 'RECEIVE_CAPSULES',
    json
})

// get capsules
export function fetchCapsules () {
    return dispatch => {
        return fetch('https://api.beedeez.com/api/v1/public/lessons/200/1')
          .then(response => response.json())
          .then(json => dispatch(receiveCapsules(json)))}}
