function Comment({id, username, body}){
    return (
        <p key={id} className="description"><span>{username} </span> {body}</p>

    )
}
export default Comment