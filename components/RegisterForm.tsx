'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BsTwitter, BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

export default function RegisterForm () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    }).then(() => router.push('/login')).catch((err) => console.log(err))
  }

  return (
    <form className='flex flex-col gap-[1rem] w-[300px]' action='/api/auth/register' method='POST' onSubmit={handleSubmit}>
      <input className='border-[1px] border-[#d7dadf] rounded-[.25rem] p-[.75rem]' onChange={e => setUsername(e.target.value)} value={username} type="text" name="username" id="username" placeholder="Username" />
      <input className='border-[1px] border-[#d7dadf] rounded-[.25rem] p-[.75rem]' onChange={e => setEmail(e.target.value)} value={email} type="mail" name="email" id="email" placeholder="Email" />
      <input className='border-[1px] border-[#d7dadf] rounded-[.25rem] p-[.75rem]' onChange={e => setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="Password" />
      <button className='bg-[#4982cf] py-[.75rem] rounded-[.25rem] text-white transition-all duration-300 ease-linear hover:bg-[#386eb4]' type="submit">Sign Up</button>
      {/* <div className='mt-[2rem] flex flex-col items-center gap-[1rem]'>
        <span className='text-sm text-[#a2a4a7]'>Or Sign Up Using</span>
        <div className='flex gap-[.5rem] justify-center'>
          <button className='bg-[#4982cf] text-white h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-300 ease-in hover:bg-[#386eb4]'><FaFacebookF /></button>
          <button className='bg-[#4982cf] text-white h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-300 ease-in hover:bg-[#386eb4]'><BsTwitter /></button>
          <button className='bg-[#4982cf] text-white h-[40px] w-[40px] rounded-full flex justify-center items-center transition-all duration-300 ease-in hover:bg-[#386eb4]'><BsGoogle /></button>
        </div>
      </div> */}
    </form>
  )
}