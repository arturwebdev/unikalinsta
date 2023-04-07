import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import './CreatePost.css'
const CreatePost = () => {

    const dispatch = useDispatch()

    const formRef = useRef(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'addPost', payload:{
            img: formRef.current[0].value,
            desc: formRef.current[1].value
        }})
        navigate('/')
        formRef.current.reset()
     }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='CreatePost'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit} style={{marginTop: '50px'}}>
                <div>
                    <input  type='text' placeholder='img'/>
                </div>
                <div>
                    <input  type='text' placeholder='desc'/>
                </div>

                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
