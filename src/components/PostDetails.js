import React from 'react'

const PostDetails = (props) => {
  return (
    <div className='post-details'>
    <h3 className='underline-text'>{props.item.title}</h3>
    <p>{props.item.author}</p>
    <p className='content'>{props.item.content}</p>

    <div className='post-grid'>
        <a href="">edit</a>
        <a href="">delete</a>
    </div>
    </div>
  )
}

export default PostDetails
