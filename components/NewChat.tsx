import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

function NewChat() {

    const {data : session} = useSession()
    const router = useRouter()
   async function  createNewChat(){
        const doc = await addDoc(
            collection(db,"users",session?.user?.email!,"chats"),{
                userId : session?.user?.email,
                time: serverTimestamp()
            }
        )

        router.push(`/chats/${doc.id}`)
    }

    return (
        <div className=' flex rounded bg-slate-600 p-2 w-full text-white text-sm my-2 cursor-pointer' onClick={createNewChat}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke-width="1.5" stroke="currentColor" className="w-4 mx-1 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <p className=''>New Chat</p>
        </div>
    )
}

export default NewChat