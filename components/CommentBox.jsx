import React from 'react'

const CommentBox = ({usercomment}) => {
  return (
    <div className={`comment ${usercomment.delay} mt-6 `}>
    <div className={` max-w-fit border border-black rounded-2xl  flex-1 bg-slate-100 p-3 backdrop-blur-lg flex-wrap `}>
        <h2 className='font-satoshi text-black text-md font-bold'>{usercomment.user}</h2>
        <p className={`font-satoshi text-slate-800 text-sm`} >{usercomment.comment}</p>
    </div>
    </div>
  )
}

export default CommentBox