export const ignoreUpperCaseAndWhitespace = () => (next) => (action) => {
    if(action.type === 'search/toggleSearch'){
        action.payload = action.payload.toLowerCase().replaceAll(' ', '')
    }
    return next(action)
}