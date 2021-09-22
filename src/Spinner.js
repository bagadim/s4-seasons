import React from 'react'

export default function Spinner({text = 'Loading...'}) {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{text}</div>
        </div>
    )
}