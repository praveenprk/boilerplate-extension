export const setTokenToLocalStorage = (token_type, token_value) => {
    try {
        localStorage.setItem(`${token_type}`, token_value)    
    } catch (error) {
        console.log(error)
    }
    
}

export const getTokenFromLocalStorage = (token_type, token_value) => {
    try {
        return localStorage.getItem(`${token_type}`)
    } catch (error) {
        return error === null ? `no keys found` : ``
    }
    
}