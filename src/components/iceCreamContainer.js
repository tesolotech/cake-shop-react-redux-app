import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';


function IceCreamContainer() {
    const state = useSelector(state => state.iceCream.noOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice-creams - {state}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice-Creams</button>
        </div>
    )
}

export default IceCreamContainer
