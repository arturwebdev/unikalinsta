import { useDispatch, useSelector } from 'react-redux'
import './MessengerPeoplesMessage.css'
import { changeActiveUser, selectMessages } from '../../store/slices/messages/messagesSlice';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { useEffect } from 'react';

function MessengerPeoplesMessage({name,img, id}) {

	const dispatch = useDispatch();
	const { activeUserId } = useSelector(selectMessages);
	const { currentUser } = useSelector(selectUsers)


  return (
	 <div onClick={() => dispatch(changeActiveUser({fromId: currentUser.id, toId: id}))} className='Messenger-left-col-people-message'
	 	style = {{backgroundColor: activeUserId === id ? '#DCDCDC' : 'white', cursor: 'pointer' }}>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
		</div>
	 </div>
  )
}

export default MessengerPeoplesMessage
