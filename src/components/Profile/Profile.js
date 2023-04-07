import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css'
import { selectUsers } from '../../store/slices/users/usersSlice';
import ProfilePosts from '../ProfilePosts/ProfilePosts';
const Profile = () => {
    
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch( {type:'removePosts', payload: {id: id}} )
    }


    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser?.username}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.posts.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <h3>{currentUser?.name}</h3>
                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
            {
                currentUser?.posts.map(el => (
                    <ProfilePosts key={el.id} img={el.img}  likesCount={el.likesCount} comments={el.comments} handleRemove={() => handleRemove(el.id)}/>
                ))
            }
            </div>
        </div>
    
        </>
    );
}

export default Profile;
