"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <><div className=" bg-[#11A37f] h-screen flex flex-col justify-center items-center">
    <Image  
    src="https://links.papareact.com/2i6"
    width={300}
    height={300}
    alt="img"
    />
    <p className="text-white cursor-pointer animate-pulse" onClick={()=>{signIn('google')}}>Signin to chatGPT</p>
    </div>
    </>
  )
}

export default Login