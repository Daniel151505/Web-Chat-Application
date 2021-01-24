import React ,{useState} from 'react'
import registerImage from '../../assets/images/register.svg'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {register} from '../../store/actions/auth'
import './Auth.scss'

const Register = ({history}) => {

    const dispatch = useDispatch()

    const [firstName, setFirstName]= useState('')
    const [lastname, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [gender, setGender]= useState('male')
    const [password, setPassword]= useState('')

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(register({ firstName, lastname, email, gender, password }, history))
    }

    return (
        <div id='auth-container'>
            <div id ='auth-card'>
                <div className='car-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register' />
                    </div>
                    <div id='form-section'>
                        <h2>Crea una cuenta</h2>

                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                required='required'
                                type='text'
                                placeholder='Nombre' />
                            </div>

                            <div className='input-field mb-1'>
                                <input 
                                onChange={e => setLastName(e.target.value)}
                                value={lastname}
                                required='required'
                                type='text'
                                placeholder='Apellido' />
                            </div>

                            <div className='input-field mb-1'>
                                <input 
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                required='required'
                                type='text'
                                placeholder='Correo' />
                            </div>

                            <div className='input-field mb-1'>
                                <select
                                 onChange={e => setGender(e.target.value)}
                                 value={gender}
                                 required='required'
                                 type='text'
                                 >
                                    <option value='male'>Hombre</option>
                                    <option value='female'>Mujer</option>

                                </select>
                            </div>

                            <div className='input-field mb-2'>
                                <input
                                 onChange={e => setPassword(e.target.value)}
                                 value={password}
                                 required='required'
                                 type='password'
                                placeholder='Contraseña'></input>
                            </div>

                            <button>Registrate</button>
                        </form>

                        <p>Tienes una cuenta? <Link to='/login'>Inicia Sesión</Link></p>
 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register