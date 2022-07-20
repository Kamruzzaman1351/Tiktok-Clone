import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { GoogleLogin, googleLogout  } from '@react-oauth/google'
import { SiTiktok } from "react-icons/si"
import { createOrGetUser } from '../utils';
import useAuthStore from '../store/authStore';
import {IUser} from "../types"
const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore()
  const [user, setUser] = useState<IUser | null>()
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile])
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-4 px-4'>
      <Link href="/" >
        <div className='cursor-pointer w-[100px] md:w-[129px] md:h-[30px] h-[38px]'>
          <h1 className='text-red-600 text-3xl inline-flex justify-between gap-2'>
            <SiTiktok /> TikTok
          </h1>
        </div>
      </Link>
      <div>Search</div>
      <div>
        {user ? (
          <div className='flex gap-5 md:gap-10'>
            <Link href='/upload'>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link>
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <>
                  <Image
                    className='rounded-full cursor-pointer'
                    src={user.image}
                    alt='user'
                    width={40}
                    height={40}
                  />
                </>
              </Link>
            )}
            <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color='red' fontSize={21} />
              </button>
          </div>
        ) : (
          <div>
            <GoogleLogin 
              onSuccess={(response) => createOrGetUser(response, addUser) }
              onError={() => console.log('Login Failed')}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar