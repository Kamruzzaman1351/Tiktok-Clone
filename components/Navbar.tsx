import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google'
import { SiTiktok } from "react-icons/si"

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href="/" >
        <div className='w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
          <h1 className='text-red-600 text-3xl inline-flex justify-between gap-2'>
            <SiTiktok /> TikTok
          </h1>
        </div>
      </Link>
    </div>
  )
}

export default Navbar