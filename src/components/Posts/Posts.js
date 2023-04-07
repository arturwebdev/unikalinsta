import React, { useEffect, useMemo } from 'react'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPost } from '../../store/slices/posts/postsSlice'
import Spiner from '../Spiner/Spiner'
import { selectSearch } from '../../store/slices/search/searchSlice'

function Posts() {
  const dispatch = useDispatch()
  const {data:posts, isLoading} = useSelector(selectPost)
  const search =  useSelector(selectSearch)

  useEffect(()=>{
    if(!posts.length){
      dispatch(fetchPosts())
    }
  },[])

  const filteredPosts = useMemo(() => {
    return [
      ...posts.filter(post => post.name.includes(search))
    ].sort((a,b) => a.name.indexOf(search) - b.name.indexOf(search))
  },[posts,search])

  return (
    <>
        {
          isLoading ? <Spiner /> :
          !filteredPosts.length? <h1>There are not any posts</h1> :
          filteredPosts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments} />)
        }
    </>
  )
}

export default Posts