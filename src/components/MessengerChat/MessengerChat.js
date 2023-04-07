// import { useMemo } from 'react'
// import './MessengerChat.css'
// import { useSelector } from 'react-redux'
// import { selectMessages } from '../../store/slices/messages/messagesSlice'
// import { selectUsers } from '../../store/slices/users/usersSlice'


// function MessengerChat() {
//   const { activeUserId, currentDialog } = useSelector(selectMessages)
// 	const { currentUser } = useSelector(selectUsers)



//   return (
// 	 <div className='MessengerChat'>
//       {/* {
//         currentDialog.map((chat) => (
//           <div style={{textAlign: chat.fromId === currentUser.id ? 'end' : 'start'}} key={chat.id}>{chat.txt}</div>
//         ))
//       } */}

//       <div class="base-container">
//   <div class="friend-text-div">
//     <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
//     <div class="friend-text-container">
//       <div class="friend-text">Yay!</div>
//       <div class="friend-text">You should get a new laptop keyboard cover</div>
//       <div class="friend-text">Yay!</div>
//     </div>
//   </div>
//   <div class="my-text-div">
//     <div class="my-text-container">
//       <div class="my-text">Yeah</div>
//       <div class="my-text">You are right</div>
//       <div class="my-text">Maybe tomorrow</div>
//     </div>
//   </div>
//   <div class="my-text-div">
//     <div class="my-text-container">
//       <div class="my-text">Yeah</div>

//     </div>
//   </div>
// </div>
// 	 </div>
//   )
// }

// export default MessengerChat

import { useEffect, useMemo, useRef } from 'react'
import './MessengerChat.css'
import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'


function MessengerChat() {
  const { activeUserId, currentDialog } = useSelector(selectMessages)
	const { currentUser, usersData } = useSelector(selectUsers)
  const chatRef = useRef(null)

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [currentDialog])


  const activeUser = useMemo(()=>(
		{
			...usersData.find(user => user.id === activeUserId)
		}
	)

	,[activeUserId])

  return (
	 <div className='MessengerChat' ref={chatRef}>
      {
        currentDialog.map((chat) => (

          <div className={chat.fromId === currentUser?.id ? "my-text-div" :"friend-text-div"} key={chat.id}>
              {chat.fromId !== currentUser.id && <img src={activeUser.avatar} />}
              <div className={chat.fromId === currentUser?.id ? "my-text-container" :"friend-text-container"}>
                <div className={chat.fromId === currentUser?.id ? "my-text" :"friend-text"}>{chat.txt}</div>
              </div>
          </div>
          ))
      }
	 </div>
  )
}

export default MessengerChat
