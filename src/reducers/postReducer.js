import TYPES from './types'

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) { 
    switch(action.type){
        case TYPES.FETCH_POST:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}