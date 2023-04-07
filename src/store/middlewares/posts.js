export const ignoreEmptyComment = () => (next) => (action) => {
    if(action.type === 'posts/addComment' && !action.payload.body.trim()){
        return
    }
    return next(action)

}

export const addPost = (state) => next => action => {
    if(action.type === 'addPost'){

        const post = {
            id: new Date().getTime().toString(),
            img: action.payload.img,
            name: state.getState().users.currentUser.username,
            postText: action.payload.desc,
            likesCount: Math.round(Math.random()*300 + 500),
            timeAgo: Math.round(Math.random()*7 + 2) + 'Minutes ago',
            comments: []

        }

        state.dispatch({type: 'posts/addPost', payload: {...post}})
        state.dispatch({type: 'users/addPost', payload: {...post}})

        return
    }
    next(action)
}


export const removePosts = (state) => next => action => {
    if(action.type === 'removePosts'){

        state.dispatch({type: 'posts/removePost', payload: {...action.payload}})
        state.dispatch({type: 'users/removePost', payload: {...action.payload}})


        return
    }
    next(action)
}