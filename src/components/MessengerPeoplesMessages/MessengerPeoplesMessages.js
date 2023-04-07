import './MessengerPeoplesMessages.css'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerPeoplesMessages() {
	const {currentUser} = useSelector(selectUsers)
	

  const { usersData } = useSelector(selectUsers)
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			usersData.filter(user => user.id !== currentUser?.id).map(el => <MessengerPeoplesMessage key={el.id} id={el.id} img={el.avatar} name={el.username}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
