import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';


function HooksCakeContainer() {
    const state = useSelector(state => state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>nUMBER oF cAKE - {state}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer
