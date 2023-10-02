'use client'
import { useEffect, useState } from 'react'
import CommentBox from '@components/CommentBox'
const Comments = () => {

const [_comment, set_comment] = useState([])
const [_document, set_document] = useState(null)


useEffect(() => {
    set_comment([
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
set_document(document)


}, [])

  return (
    <div className='w-full  '>
    <div className='w-full bg-slate-100 pb-6 pt-1 '>

        {_comment.map((usercomment, i) => (
            <CommentBox usercomment = {usercomment} key={i}></CommentBox>
        ))}
    </div>
    </div>

  )
}

export default Comments