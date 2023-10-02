'use client'
import { useEffect, useState } from 'react'
import CommentBox from '@components/CommentBox'

const Comments = () => {

    const [comment, setComment] = useState([])
    const [document, setDocument] = useState(null)

    useEffect(() => {
        setComment([
        {
            comment:"Que gran proyecto",
            delay: 'myDelay-0',
            user: 'Juan Carlos',
        },
        {
            comment:"Que maravilla!!!",
            delay: 'myDelay-600',
            user: 'Marianella Espinosa',
        },
        {
            comment:"Es el servicio que no sabíamos que necesitábamos",
            delay: 'myDelay-1000',
            user: 'Andrea Cabazos',
        },
    ])
    setDocument(document)
    }, [])

    return (
    <div>
        <div className='w-full bg-orange-100 border-orange-300 rounded shadow p-3'>

            {comment.map((usercomment, i) => (
                <CommentBox usercomment = {usercomment} key={i}></CommentBox>
            ))}
        </div>
    </div>

    )
    }

export default Comments