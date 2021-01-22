import React from 'react'
import registerImage from '../../assets/images/register.svg'
import {Link} from 'react-router-dom'
import './Auth.scss'

const Register = () => {
    return (
        <div id='auth-container'>
            <div id ='auth-card'>
                <div className='car-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Register' />
                    </div>
                    <div id='form-section'>
                        <h2>Crea una cuenta</h2>

                        <form>
                            <div className='input-field mb-1'>
                                <input placeholder='Nombre' />
                            </div>

                            <div className='input-field mb-1'>
                                <input placeholder='Apellido' />
                            </div>

                            <div className='input-field mb-1'>
                                <input placeholder='Correo' />
                            </div>

                            <div className='input-field mb-1'>
                                <select>
                                    <option value='male'>Hombre</option>
                                    <option value='female'>Mujer</option>

                                </select>
                            </div>

                            <div className='input-field mb-2'>
                                <input placeholder='Password'></input>
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