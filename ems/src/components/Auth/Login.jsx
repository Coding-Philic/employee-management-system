import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is : ", email)
        console.log("password is : ", password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center text-white'>
            <div className='border-2 p-20 border-emerald-500 rounded-xl '>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center '>
                    <input value={email}
                        onChange={(e) => {

                            setEmail(e.target.value)
                        }}
                        required className='border-2 border-emerald-500  rounded-full py-3 px-5 text-xl outline-none placeholder:text-gray-400' type="email" placeholder='enter your email' />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        
                        setPassword(e.target.value)
                    }}
                    required className='border-2 border-emerald-500  rounded-full py-3 px-5 mt-3 text-xl outline-none placeholder:text-gray-400' type="password" placeholder='enter your password' />
                    <button className='border-2 bg-emerald-500 rounded-xl py-3 px-5 mt-5 text-xl outline-none placeholder:text-white'>login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
