import React from 'react'

export default function GifGridItem({title,url}) {
    return (
        <div className="card animate__animated animate__bounceInRight">
            <img src={url} alt={title}/>
        </div>
    )
}
