import {use, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
 

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data =await res.json();
      if(data.success===false){
        setError(data.message)
        setLoading(false)
      }
        setLoading(false)
       navigate('/signin')
      
    } catch (error) {
      setError(error.message)
        setLoading(false)
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          id='username'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          onChange={HandleChange}
          placeholder='Username' />
        <input
          type='email'
          name='email'
          id='email'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          onChange={HandleChange}
          placeholder='Email' />
        <input
          type='password'
          name='password'
          id='password'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          onChange={HandleChange}
          placeholder='Password' />

        <button  disabled={loading}        type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-slate-600 disabled:bg-slate-400 transition-colors duration-300'>
          {loading ? 'Processing...' : 'Sign Up'}
        </button>
        <button          type='button'
          className='bg-red-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-red-600 transition-colors duration-300'>
          Sign Up with Google
        </button>
      </form>
      <div className='text-center mt-4'>
        Already have an account? <Link to='/signin' className='text-blue-500 hover:underline'>Login</Link>
      </div>
      {error && <div className='text-red-500 mt-4 text-center'>{error}</div>}
    </div>
  )
}

export default SignUp