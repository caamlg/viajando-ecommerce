import React from 'react'
import './ItemCount.css'
const {useState} = React;

export const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(parseFloat(initial));

    const add = () => counter < stock ? setCounter (counter+1) : alert("No hay suficiente stock")

    const remove = () => counter > 0 ? setCounter (counter-1) : alert ("Ya quitaste todas las unidades")

    return (
        <div className="counter">
            <p>{counter}</p>
            <div className="button__wrapper">
                <button onClick={remove}>-</button>
                <button onClick={add}>+</button>
            </div>
        </div>
    )
}