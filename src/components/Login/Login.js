import React, { useEffect, useRef } from 'react'
import './Login.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'
import { useNavigate } from 'react-router-dom'


function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formRef = useRef()
    const {usersData, currentUser} = useSelector(selectUsers)

    useEffect(()=>{
        if(currentUser){
            navigate('/')
        }
    },[currentUser])

    useEffect(()=>{
        if(!usersData.length){
            dispatch(fetchUsers())
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();

        const { email: { value: email }, password: { value: password } } = formRef.current
        dispatch(login({email, password}))

        formRef.current.reset()
    }
    

    return(
        <div className='Login'>
            <div className="wrapper">
                <div className="main-content">
                    <div className="header">
                        <img src={IMAGES.logo}  alt=""  />
                    </div>
                    <div className="l-part">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" name='email' defaultValue='bret' placeholder="Username" className="input-1" />
                            <div className="overlap-text">
                                <input type="password" name='password' defaultValue='gwenborough' placeholder="Password" className="input-2" />
                                <button className='btn'>Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login