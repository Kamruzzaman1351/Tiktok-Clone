import React from 'react'
import { MdOutlineVideocamOff } from 'react-icons/md'
interface IText {
  text: string;
}

const NoResults = ({text}: IText) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <p className='text-8xl'>
        <MdOutlineVideocamOff />
      </p>
      <p className='text-2xl text-center'>{text}</p>
    </div>
  )
}

export default NoResults