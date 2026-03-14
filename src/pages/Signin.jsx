
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginSuccess, loginFailure } from '../redux/user/counterSlice.js'



const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
 const {loading, error} = useSelector((state) => state.user);
 

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(loginStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data =await res.json();
      if(data.success===false){
        dispatch(loginFailure(data.message)); 
        return;
      }
        dispatch(loginSuccess(data));
        navigate('/')
      
    } catch (error) {
      dispatch(loginFailure(error.message)); 
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          id='username'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          onChange={HandleChange}
          placeholder='Username' />
        <input
          type='password'
          name='password'
          id='password'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          onChange={HandleChange}
          placeholder='Password' />

        <button  disabled={loading}        type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-slate-600 disabled:bg-slate-400 transition-colors duration-300'>
          {loading ? 'Processing...' : 'Sign In'}
        </button>
        <button          type='button'
          className='bg-red-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-red-600 transition-colors duration-300'>
          Sign in with Google
        </button> 
      </form>
      <div className='text-center mt-4'>
        YOu dont have an account? <Link to='/signup' className='text-blue-500 hover:underline'>Sing up</Link>
      </div>
      {error && <div className='text-red-500 mt-4 text-center'>{error}</div>}
    </div>
  )
}

export default SignIn