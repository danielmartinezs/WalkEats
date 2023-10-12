'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import CommentBox from '@components/CommentBox'

const Comments = () => {

    const [comment, setComment] = useState([])
    const [document, setDocument] = useState(null)
    const commentRef = useRef(null)
    const gsapComment = {
        comment: "Prueba de recorrido",
        delay: null,
        user: "GSAP"
    }

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
            {
                comment: "Es hermoso",
                delay: 'myDelay-1600',
                user: 'Joel Vázquez'
            }
        ])
        setDocument(document)
    }, [])

    return (
    <div>
        <div className='w-full bg-orange-100 border-orange-300 rounded shadow p-3'>
            {comment.map((usercomment, i) => (
                <CommentBox usercomment={usercomment} key={i} tipo={"comment"}/>
            ))}
        </div>
    </div>
    )
    }

export default Comments