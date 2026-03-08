import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing up</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          name='username'
          id='username'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          placeholder='Username' />
        <input
          type='email'
          name='email'
          id='email'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          placeholder='Email' />
        <input
          type='password'
          name='password'
          id='password'
          className='border border-gray-200 bg-white p-3 rounded-lg focus:outline-none'
          placeholder='Password' />

        <button          type='submit'
          className='bg-slate-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-slate-600 disabled:bg-slate-400 transition-colors duration-300'>
          Sign Up
        </button>
        <button          type='button'
          className='bg-red-700 text-white p-3 rounded-lg font-semibold uppercase hover:bg-red-600 transition-colors duration-300'>
          Sign Up with Google
        </button>
      </form>
      <div className='text-center mt-4'>
        Already have an account? <Link to='/signin' className='text-blue-500 hover:underline'>Login</Link>
      </div>
    </div>
  )
}

export default SignUp