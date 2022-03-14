import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDrop } from 'react-dnd'
import Block from './Block';
import ItemTypes from "./types";

function Canvas() {
    const [content, setContent] = useState([])

    const [, drop] = useDrop({
        accept: 'block',
        drop: item => setContent(content => !content.includes(item) ? [...content, item] : content),
        collect: (monitor) => {
            isOver: monitor.isOver()
        }
    })


    return (
        <Card body
            ref={drop}
        >
            <Block id="init" name="init"></Block>
            {content.map(el => <Block id={el.id} name={el.name}/>)}
        </Card>
    )
}

export default Canvas