export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT'

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzXcQ-YH-9fj9JXYY6TKipHJV5QpnpQk4',{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });
        const resData = await response.json();
        console.log(resData)
        dispatch({type:ADD_ACCOUNT, token : resData.idToken, userId : resData.localId })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzXcQ-YH-9fj9JXYY6TKipHJV5QpnpQk4',{
            method:'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });
        const resData = await response.json();
        console.log(resData)
        dispatch({type : LOGIN_ACCOUNT, token : resData.idToken, userId : resData.localId })
    }
}