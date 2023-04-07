import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'search/fetchUsers',
    async function(){
        const { data: usersData } = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data: postsData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit:500')



        const data = [
            ...usersData.map(user => ({
                id: user.id + '_' + user.id,
                name: user.name,
                username: user.username.toLowerCase(),
                email: user.email.toLowerCase(),
                password: user.address.city.toLowerCase(),
                avatar: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png`,
                following: Math.round(Math.random()*300 +400),
                followers: Math.round(Math.random()*300 +400),
                bio:user.company.catchPhrase + user.company.bs,
                posts: [
                    ...postsData.filter(post => post.albumId === user.id)
                                .map(post =>({
                                    id: post.id.toString(),
                                    img: post.url,
                                    name: user.username.toLowerCase(),
                                    postText: post.title.split(' ').splice(1).join(' '),
                                    likesCount: Math.round(Math.random()*300 +500),
                                    timeAgo: Math.round(Math.random()*7 +2) + 'Minutes ago',
                                    comments: []
                                }))
                ],


        }))]
        return data
    }
)