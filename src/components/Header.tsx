import { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'

export function Header() {
    return (
        <header className="z-10 fixed w-full bg-containerColor">
            <div className="px-6 py-4 flex justify-between items-center">
                <span className='text-2xl font-semibold'>
                    Gabriel <span className='text-firstColor'>Naldi</span>
                </span>

                <span className='hover:cursor-pointer'>
                    <AiOutlineMenu size={24} />
                </span>
            </div>
        </header>
    )
}