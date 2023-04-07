import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import { addMessage, selectMessages } from '../../store/slices/messages/messagesSlice';
function MessengerChatForm() {

	const formRef = useRef();
	const dispatch = useDispatch()
	const { currentUser } = useSelector(selectUsers)
	const { activeUserId } = useSelector(selectMessages)


	const handleSubmit = (e) => {
        e.preventDefault()
		console.log(e)
        const { messageTxt: { value: messageTxt } } = formRef.current
		dispatch(addMessage({
			fromId: currentUser.id,
            toId: activeUserId,
            txt:messageTxt
		}))
        formRef.current.reset()
    }

  return (
	 <div className='Chat-input'>
		<form ref={formRef} onSubmit={handleSubmit}>
			<input type='text' name='messageTxt' placeholder='Message...'/>
		</form>
		<img src={IMAGES.like} alt=''/>
	 </div>
  )
}

export default MessengerChatForm
