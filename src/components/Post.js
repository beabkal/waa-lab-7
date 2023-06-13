import React from 'react'

const Post = ({item, onClick}) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <div className='Post' onClick={handleClick}>
      <p>Id: {item.id}</p>
      <p>Title: {item.title}</p>
      <p>Author: {item.author}</p>
    </div>
  )
}

export default Post
