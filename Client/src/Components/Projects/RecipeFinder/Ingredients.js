import React from 'react'

export const Ingredients = ({ item }) => {
    return (
        <div>
            <p style={{ margin: '0', color: 'black' }}> {item.text}</p>
        </div>
    )
}