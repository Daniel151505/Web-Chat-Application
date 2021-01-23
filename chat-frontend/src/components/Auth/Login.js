import React, {useState} from 'react'
import loginImage from '../../assets/images/login.svg'
import {Link} from 'react-router-dom'
import AuthService from '../../services/authService'
import './Auth.scss'

const Login = () => {

    const [ email, setEmail]=useState('john.doe@gmail.com')
    const [password,setPassword]=useState('secret')

    const submitForm= (e) =>{
        e.preventDefault()

        AuthService.login({email,password}).then(res => console.log(res))

      /*  axios.post('http://127.0.0.1:3000/login', {email,password})
            .then(res => {
                console.log("res",res);
            })
            .catch(err => {
                console.log('err',err);
            }) 
       */
        console.log({email,password});
    }

    return (
        <div id='auth-container'>
            <div id ='auth-card'>
                <div className='car-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login' />
                    </div>
                    <div id='form-section'>
                        <h2>Wellcome back</h2>

                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input 
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required='required'
                                type='text'
                                placeholder='Correo' />
                            </div>

                            <div className='input-field mb-2'>
                                <input 
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                required='required'
                                type='password'
                                placeholder='Password' />
                            </div>

                            <button>Login</button>
                        </form>

                        <p>No tienes una cuenta? <Link to='/register'>Registrate</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login