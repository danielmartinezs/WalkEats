'use client'
import { useState, useRef, useEffect } from 'react'

const Comments = ({comment}) => {
    const dupComments = comment.concat(comment)
    const dupeDob = dupComments.concat(dupComments)
    const dupped = (i) =>{
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

    const fetchComments= async () =>{
        console.log('fetch');
        const response = await fetch('/api/fun', { method: 'GET' });
        const data = await response.json();
        console.log(response)
        console.log(data)
        setComment(data);
    }
    
    const startScroller = () => {
        const copy = document.querySelector(".commentScrollerInner").cloneNode(true)
        document.querySelector(".commentScrolller").appendChild(copy)
    }

    useEffect(() => {
        fetchComments()
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