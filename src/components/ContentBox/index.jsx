import * as React from 'react';

export const ContentBox = (props) => {
    return (
    <div>
      {props.children}
    </div>
    )
}

export const ContentTitle = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export const ContentBody = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}
