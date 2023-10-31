'use client'
import {useState, useRef, useEffect} from 'react'

const CommentBox = () => {
    const [comment, setComment] = useState([])
    //const [document, setDocument] = useState(null)
    const commentRef = useRef(null)

    const startScroller = () =>{
        if(document){
            console.log("True")
            const scrollers = document.querySelectorAll(".commentScrolller")
            scrollers.forEach((scroller) =>{
                scroller.setAttribute("data-animated", true)

                const scrollerInner = scroller.querySelector('.commentScrollerInner')
                console.log(scrollerInner.children)
                const scrollerContent = Array.from(scrollerInner);
                console.log(scrollerContent)
                Array.from(scrollerInner.children).forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicatedItem);
                })
            })  
        }
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
        startScroller()
    }, [])
    
  return (
    <div className='commentScrolller w-full bg-orange-100 border-orange-300 rounded shadow p-3'>
    <ul className='commentScrollerInner '>
    {comment.map((usercomment, i) => (
        <li key={i} className=' bg-red-500 rounded-lg '>
            {usercomment.comment}
        </li>
    ))}
    </ul>
</div>
  )
}

export default CommentBox