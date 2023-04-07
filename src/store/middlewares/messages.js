export const ignoreEmptyMessage = () => (next) => (action) => {
    if(action.type === 'messages/addMessage' && !action.payload.txt.trim()){
        return
    }
    return next(action)

}