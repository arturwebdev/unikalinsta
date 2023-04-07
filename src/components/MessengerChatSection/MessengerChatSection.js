import { useSelector } from 'react-redux'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useMemo } from 'react'

function MessengerChatSection() {
	const { activeUserId } = useSelector(selectMessages)
	const { usersData } = useSelector(selectUsers)

	const activeUser = useMemo(()=>(
		{
			...usersData.find(user => user.id === activeUserId)
		}
	)

	,[activeUserId])
  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
		<img src={activeUser.avatar} alt=''/>
			<p>{activeUser.username}</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
