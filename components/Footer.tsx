import React from 'react'
import { NextPage } from 'next'

import { footerList1, footerList2, footerList3 } from '../utils/constants'
import Link from 'next/link'
const List = ({items, mt}: {items:string[], mt:boolean}) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map(item => (
      <p key={item} 
        className="text-gray-400 text-sm hover:underline cursor-pointer">
        {item}</p>
    ))}
  </div>
)


const Footer: NextPage = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList1} mt={false}/>
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <div className='text-gray-400 text-sm mt-5'>
        {`© ${currentYear} TikTok`}
        <h3>Created By: <Link href="https://github.com/Kamruzzaman1351" target="_blank" >
          <span className="text-bold text-[#F51997] cursor-pointer">Kamruzzaman</span></Link>
        </h3>
      </div>
    </div>
  )
}

export default Footer