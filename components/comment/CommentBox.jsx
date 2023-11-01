'use client'
import { useState, useRef, useEffect } from 'react'

const Comments = ({comment}) => {
    const dupComments = comment.concat(comment)
    const dupeDob = dupComments.concat(dupComments)
    const dupped = (i) =>{
        console.log(i)
        if(i>comment.length-1){
            return true;
        }
        return false;
    }
    return (
        <>
            {dupeDob.map((usercomment, i) => (
                <li key={i} className=' bg-red-500 rounded-lg ' aria-hidden={dupped(i)}>
                    {usercomment.comment}
                </li>
            ))}
        </>
    )
}

const CommentBox = () => {
    const [comment, setComment] = useState([])
    //const [document, setDocument] = useState(null)
    const commentRef = useRef(false)

    const startScroller = () => {
        const copy = document.querySelector(".commentScrollerInner").cloneNode(true)
        document.querySelector(".commentScrolller").appendChild(copy)
    }

    useEffect(() => {
        setComment([
            {
                comment: "Que gran proyecto",
                delay: 'myDelay-0',
                user: 'Juan Carlos',
            },
            {
                comment: "Que maravilla!!!",
                delay: 'myDelay-600',
                user: 'Marianella Espinosa',
            },
            {
                comment: "Es el servicio que no sabíamos que necesitábamos",
                delay: 'myDelay-1000',
                user: 'Andrea Cabazos',
            },
            {
                comment: "Es hermoso",
                delay: 'myDelay-1600',
                user: 'Joel Vázquez'
            }
        ])
        if (!commentRef.current) {
            commentRef.current = false;
        }
    }, [])

    return (
        <div className='commentScrolller w-full bg-orange-100 border-orange-300 rounded shadow p-3' data-animated={true}>
            <ul className='commentScrollerInner ' >
                <Comments
                comment = {comment}
                />
            </ul>
        </div>
    )
}

export default CommentBox