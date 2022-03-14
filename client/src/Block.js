import React from 'react'
import { Card } from 'react-bootstrap'
import { useDrag } from 'react-dnd'
import ItemTypes from './types';

function Block({ id, name }) {
    const [{ isDragging }, drag] = useDrag({
        type: 'block',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <div ref={drag}>
            <Card body>{name}</Card>
        </div>
    )
}

export default Block