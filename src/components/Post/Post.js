import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import Comment from '../Comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/slices/posts/postsSlice'
import { showComments } from '../../hoc/showComments'
import { selectUsers } from '../../store/slices/users/usersSlice'

function Post({id, img, comments, name, likesCount, postText, timeAgo, showComments, openComments}) {

    const dispatch = useDispatch()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const body = formRef.current[0].value

        dispatch(addComment({
            body,id,
            username:currentUser.username
        }))
        formRef.current.reset()
        
    }
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={img} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            {!!postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
            {
                showComments ?
                comments.map(comment => (
                    <Comment key={comment.id} username={comment.username} body={comment.body}/>
                )) : comments.length ?
                <h1 style={{cursor:'pointer'}} onClick={openComments}>Show All Comments</h1>
                : null
            }
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="comment-wrapper">
                <img src={IMAGES.smile} className="icon" alt=""/>
                <input onFocus={openComments} type="text" className="comment-box" placeholder="Add a comment"/>
                <button style={{cursor:'pointer'}} className="comment-btn">post</button>
            </div>
        </form>
        
    </div>
  )
}

export default showComments(Post)