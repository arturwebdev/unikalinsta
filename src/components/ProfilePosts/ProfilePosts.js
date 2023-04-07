import './ProfilePosts.css'

function ProfilePosts({img, likesCount, comments, handleRemove }){
    return(
        <div className="gallery-item">
            <img src={img} className="gallery-image" alt=""/>
            <p className="removeItem" onClick={handleRemove}>X</p>
            <div className="gallery-item-info">
                <ul>
                    <li className="gallery-item-likes"><span >Likes</span> {likesCount}</li>
                    <li className="gallery-item-comments"><span >Comments</span> {comments}</li>
                </ul>
            </div>
        </div>
    )
}
export default ProfilePosts