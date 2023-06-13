import React, { useState } from 'react'
import Post from './Post'
import PostDetails from './PostDetails'

const Posts = () => {
    const postList = [
        {
            id: 111,
            title: "Happiness",
            author: "John",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, placeat."
        },
        {
            id: 112,
            title: "MIU",
            author: "Dean",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, eum!"
        },
        {
            id: 113,
            title: "Enjoy Life",
            author: "Jasmine",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eveniet!"
        }
    ]
    const [posts, setPost] = useState(postList)
    const [inputValue, setInputValue] = useState('')
    const [postDetail, setPostDetail] = useState(postList[0])

    console.log(postDetail)
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = (val) => {
        setPost([
            {
            ...posts[0],
            title: val
            },
            ...posts.slice(1)
        ])
    }

    const handlePostClick = (item) => {
        setPostDetail(item)
        console.log(item)
    }
    
    return (
        <>
            <div className='grid-container'>
                {posts.map((item) => (
                    <Post item={item} key={item.id} onClick={(item) =>handlePostClick(item)} />

                )
                )}

            </div>
            <br/><br/>
            <div className='change-name'>
                <input type="text"  value={inputValue} onChange={handleInputChange}/><br/><br/>
                <button onClick={() => handleClick(inputValue)}>Change Name</button>
            </div>

      <PostDetails item= {postDetail} />

        </>

    )
}

export default Posts
