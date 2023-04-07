import { useCallback, useState } from "react"

export const showComments = (Component) =>{
    return(props) => {
        const [showComments, setShowComments] = useState(false)
        
        const openComments = useCallback(()=>{
            setShowComments(true)
        })
        return <Component {...{openComments, showComments}} {...props} />
    }
}