
import { BUY_ICECREAM } from './iceCreamActionType';


const initialState = {
    noOfIceCreams: 10
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state;
    }
}

export default iceCreamReducer;