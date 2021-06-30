import * as React from 'react';
import {RowElement} from './style';

export const TestButton = () => {
    return (
        <button css={"cursor:pointer;"}>
            Test
        </button>
    )
}

export const Row = (props) => {
    return (
        <RowElement 
        margin={props.margin} 
        padding={props.padding} 
        display={props.display} 
        minHeight={props.minHeight} 
        justifyContent={props.justifyContent} 
        alignItems={props.alignItems}
        backgroundImage={props.background}>
            {props.children}
        </RowElement>
    )
}

export const Column = (props) => {
    return (
        <div>
            Column
        </div>
    )
}


