import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/slices/users/usersSlice';

function HomeWrapper() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useSelector(selectUsers)

  useEffect(() => {
    if(!currentUser){
      navigate('/login')
    }
  }, [currentUser])

  return (
    <div>
    {pathname !== '/login' && <Navbar />}
    <Outlet />
    </div>
  )
}

export default HomeWrapper