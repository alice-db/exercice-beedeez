// store all capsules
let all = [];

let initialState = {
    items: [],
    isFetching: true,
    toggleCapsule: null,
}

const capsules = (state = initialState, action) => {

    switch (action.type) {
    case 'SEARCH_CAPSULE':
        let found = all.filter(capsule => capsule.title.includes(action.text));
        return found ? Object.assign({}, state, { items: found }) : state;
    case 'TOGGLE_CAPSULE':
        return Object.assign({}, state,
            { toggleCapsule: all.find(capsule => capsule._id === action._id) });
    case 'CLOSE_CAPSULE':
        return Object.assign({}, state,
            { toggleCapsule: null });
    case 'RECEIVE_CAPSULES':
        all = action.json.results;
        return Object.assign({}, state, { items: all, isFetching: false });
    default:
        return state;
    }
}

export default capsules
