import React from 'react'
import Son from './Son';

export default () => {
    let x = 10
    let y = 20
    return(
        <>
            <Son a={x} b={y}/>
            <Son a={x + 100} b={y + 200}/>
        </>
    )
}