'use client';

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import CommentBox from '@components/CommentBox'
import { pruebaComments } from './Animations';

function Commentz() {

    const [comments, setComments] = useState([{
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
    }]);

    const commentsRef = useRef(null);
    const commentsArrayRef = useRef(null);
    commentsArrayRef.current = [];

    useEffect(() => {
        pruebaComments(commentsArrayRef)
    }, [])

    const addRefs = (el) => {
        if(el && !commentsArrayRef.current?.includes(el)){
            commentsArrayRef.current.push(el);
        }
        console.log(commentsArrayRef)
    }

    return (
        <div className='bg-orange-200 rounded shadow p-5 flex items-center justify-center'>
            {comments.map((comentario, i) => {
                return(
                <div className='commentario absolute inline-block p-3 mb-7' key={i} ref={addRefs}>
                    <CommentBox usercomment={comentario} key={i} tipo={comentario}/>
                </div>
                )
            })}
        </div>
    )
}

export default Commentz