"use client"

import { signOut, useSession } from "next-auth/react"
import {  collection } from 'firebase/firestore';
import { db } from "../firebase";
import { useCollection } from 'react-firebase-hooks/firestore';

import NewChat from "./NewChat"
import ChatHis from "./ChatHis";

function SideBar() {

    const { data: session } = useSession()
    const [value, loading, error]  = useCollection(
        session && collection(db,"users",session?.user?.email!,"chats")
    )
    
    return (
        <div className=" h-screen relative p-1">
            <div className="flex-1" >
                <NewChat />
            </div>
            {value?.docs.map(data=>(
                <ChatHis  key={data.id} id={data.id} />
            ))}

            {session && (
                <>
                    <div className=" flex absolute bottom-0 px-3 space-x-3">
                        <img src={session?.user?.image!} className="mx-auto h-12 w-12 rounded-full" alt="userImage" />
                       <div className="text-white"> 
                       <p>{session?.user?.name}</p>
                       <p className="cursor-pointer" onClick={()=>signOut()}>Sign out</p>
                       </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default SideBar