import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        user_email: newUser.user_email,
        user_password: newUser.user_password
    })
    .then(res => {
      console.log("registered")
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        user_email: user.user_email,
        user_password: user.user_password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}
