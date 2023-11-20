'use client'
import { useState, useRef, useEffect } from 'react'

const Comments = ({ comment }) => {
    const dupComments = comment.concat(comment)
    const dupeDob = dupComments.concat(dupComments)
    const dupped = (i) => {
        console.log(i)
        if (i > comment.length - 1) {
            return true;
        }
        return false;
    }
    return (
        <div className='commentScrollerInner'>
            {dupeDob.map((usercomment, i) => (
                <div key={i} aria-hidden={dupped(i)} className={`mt-6 `}>
                    <div className={` max-w-fit border border-orange-400 rounded-2xl flex-1 bg-slate-100 p-3 shadow-lg backdrop-blur-lg flex-wrap `}>
                        <h2 className='text-black text-md font-bold'>NAME</h2>
                        <p className='font-satoshi text-slate-800 text-sm'>{usercomment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const CommentBox = () => {
    const [comment, setComment] = useState([])
    //const [document, setDocument] = useState(null)
    const commentRef = useRef(false)

    const fetchComments = async () => {
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
        <div className='commentScrolller w-full rounded shadow p-3' data-animated={true}>
            <Comments
                comment={comment}
            />
        </div>
    )
}

export default CommentBox